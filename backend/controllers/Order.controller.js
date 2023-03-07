const Order = require("../models/Order");
const Product = require("../models/Product");

const orderCotroller = {
  getOrder: async (req, res) => {
    // const orderId = "64001e9759fa280acb29ed17";
    // Order.findOne({ _id: orderId })
    //   .populate("products")
    //   .then((order) => {
    //     const products = order.products;
    //     res.status(200).json(products);
    //   });
    // const orderId = "123456789"; // ID của đơn hàng cần lấy
    // Order.aggregate([
    //   { $match: { _id: orderId } }, // tìm đơn hàng theo ID
    //   { $unwind: "$products" }, // tách danh sách sản phẩm thành từng phần tử riêng lẻ
    //   {
    //     $lookup: {
    //       from: "products", // tên của collection chứa danh sách sản phẩm
    //       localField: "products.productId", // trường trong đơn hàng chứa ID sản phẩm
    //       foreignField: "_id", // trường trong collection sản phẩm chứa ID sản phẩm
    //       as: "product", // đặt tên cho trường chứa thông tin sản phẩm
    //     },
    //   },
    //   { $unwind: "$product" }, // tách thông tin sản phẩm thành từng phần tử riêng lẻ
    //   {
    //     $group: {
    //       _id: "$_id",
    //       products: { $push: "$product" }, // lưu thông tin các sản phẩm vào một mảng
    //     },
    //   },
    // ])
    //   .then((result) => {
    //     const products = result[0].products; // danh sách các sản phẩm
    //     res.status(201).json(products);
    //   })
    //   .catch((err) => console.log(err));
    // const { userId } = req.params;
    // try {
    //   const orders = await Order.find({ _id: userId }).toArray();
    //   res.json({ success: true, data: orders });
    // } catch (error) {
    //   console.log(error);
    //   res
    //     .status(500)
    //     .json({ success: false, message: "Internal server error" });
    // }

    try {
      Order.find({})
        .sort({ createdAt: -1 })
        .exec((err, orders) => {
          if (err) {
            res.status(500).json(err);
          }
          res.status(200).json(orders);
        });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getProductOrder: async (req, res) => {
    const userId = req.params.userId;

    try {
      const orders = await Order.find({ userId }).populate("products");
      const products = orders.reduce(
        (acc, order) => acc.concat(order.products),
        []
      );

      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createOrder: async (req, res) => {
    // try {
    //   const order = new Order({
    //     customerName: req.body.customerName,
    //     customerAddress: req.body.customerAddress,
    //     customerPhone: req.body.customerPhone,
    //     items: req.body.items,
    //     total: req.body.total,
    //     status: "pending",
    //   });

    //   order.save((err) => {
    //     if (err) {
    //       console.log("Lỗi khi lưu trữ đơn hàng trong MongoDB: " + err);
    //       res.status(500).send("Lỗi khi lưu trữ đơn hàng trong MongoDB");
    //     } else {
    //       console.log("Đơn hàng đã được lưu trữ thành công trong MongoDB!");
    //       res
    //         .status(200)
    //         .send("Đơn hàng đã được lưu trữ thành công trong MongoDB");
    //     }
    //   });
    // } catch (error) {
    //   res.status(500).send("Lỗi khi lưu trữ đơn hàng trong MongoDB");
    // }
    try {
      const { customer, products, total } = req.body;
      const order = new Order({ customer, products, total });
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: "Failed to create order." });
    }
  },

  confirmOrder: async (req, res) => {
    try {
      const results = await Order.findById(req.params.id);
      if (results.orderId === req.body.orderId) {
        await results.updateOne({
          $set: {
            status: 1,
          },
        });
        res.status(200).json("Confirm order successfully");
      } else {
        res.status(500).json("Can't Confirm order");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getOrderToday: async (req, res) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      Order.find(
        { createdAt: { $gte: today, $lt: tomorrow } },
        (err, orders) => {
          if (err) {
            res.status(500).json(err);
          }
          res.status(200).json(orders);
        }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteOrder: async (req, res) => {
    try {
      Order.findByIdAndRemove(req.params.id, (err, orders) => {
        if (err) {
          res.status(404).json("Can't find Id");
        } else {
          res.status(200).json("Delete order successfully");
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getOrderById: async (req, res) => {
    try {
      const Id = req.params.id;
      Order.findById(Id, (err, products) => {
        if (err) {
          return res.status(500).json("Can't find Id..");
        }
        return res.status(200).json(products);
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = orderCotroller;
