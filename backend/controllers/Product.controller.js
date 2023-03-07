const Product = require("../models/Product");
const cloudinary = require("../utils/cloudinary");
const product = {
  similarProduct: async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);
      const similarProducts = await Product.find({
        type: product.type,
        _id: { $ne: productId },
      }).limit(4);
      res.status(200).json(similarProducts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  RamdomProduct: async (req, res) => {
    try {
      const count = await Product.countDocuments();
      const random = Math.floor(Math.random() * count);
      const product = await Product.findOne().skip(random);
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  },

  GetPrice: async (req, res) => {
    const type = req.params.type;
    const filled = req.params.filled;
    try {
      const products = await Product.find({ type: type }).sort({
        newPrice: filled,
      });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllBy10Day: async (req, res) => {
    const TEN_DAYS = 10 * 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    try {
      const products = await Product.find({
        created_at: { $gte: new Date(currentDate - TEN_DAYS) },
      })
        .sort({ created_at: -1 })
        .limit(8);

      res.send(products);
      // const products = await Product.find({
      //   created_at: { $gte: TEN_DAYS, $lt: currentDate },
      // }).exec();
      // res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getAllProduct: async (req, res) => {
    try {
      Product.find({}, (err, products) => {
        if (err) {
          res.status(500).json(err);
        }
        res.status(200).json(products);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getProductById: async (req, res) => {
    try {
      const Id = req.params.id;
      Product.findById(Id, (err, products) => {
        if (err) {
          return res.status(500).json("Can't find Id..");
        }
        return res.status(200).json(products);
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getProductByType: async (req, res) => {
    try {
      const type = req.params.type;
      const limit = req.params.limit;
      const products = await Product.find({ type: type }).limit(limit);
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  createProduct: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "MAIZOSHOP",
      });
      let newProduct = new Product({
        image: result.secure_url,
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        newPrice: req.body.newPrice,
        oldPrice: req.body.oldPrice,
        quantity: req.body.quantity,
        rates: req.body.rates,
        colors: req.body.colors,
        stores: req.body.stores,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "MAIZOSHOP",
      });
      const results = await Product.findById(req.params.id);
      if (results.productId === req.body.productId) {
        await results.updateOne({
          $set: {
            image: result.secure_url,
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            newPrice: req.body.newPrice,
            oldPrice: req.body.oldPrice,
            quantity: req.body.quantity,
            colors: req.body.colors,
            stores: req.body.stores,
          },
        });
        res.status(200).json("Update product successfully");
      } else {
        res.status(500).json("Can't update prduct");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProduct: async (req, res) => {
    // try {
    //   Product.findByIdAndRemove(req.params.id, (err, products) => {
    //     if (err) {
    //       res.status(404).json("Can't find Id");
    //     } else {
    //       res.status(200).json("Delete product successfully");
    //     }
    //   });
    // } catch (err) {
    //   res.status(500).json(err);
    // }
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send("Product not found");
      }

      if (product.image) {
        const publicId = product.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }

      await Product.findByIdAndDelete(productId);
      res.status(200).json("Delete product successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
};

module.exports = product;
