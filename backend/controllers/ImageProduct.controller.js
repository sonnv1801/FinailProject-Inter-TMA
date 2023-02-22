const ImageProduct = require("../models/ImageProduct");
const cloudinary = require("../utils/cloudinary");

const imageProduct = {
  getAllImgPrd: async (req, res) => {
    try {
      ImageProduct.find({}, (err, images) => {
        if (err) {
          res.status(404).json("Can't find image product");
        }
        res.status(200).json(images);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  createImgPrd: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "MAIZOSHOP/IMAGEPRODUCT",
      });
      let newImgPrd = new ImageProduct({
        image: result.secure_url,
        id_product: req.body.id_product,
      });
      await newImgPrd.save();
      res.status(200).json(newImgPrd);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteImgPrd: async (req, res) => {
    try {
      ImageProduct.findByIdAndRemove(req.params.id, (err, img) => {
        if (err) {
          res.status(404).json("Can't find Id");
        } else {
          res.status(200).json("Delete image product successfully");
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = imageProduct;
