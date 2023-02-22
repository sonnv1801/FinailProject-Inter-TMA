const Banner = require("../models/Banner");
const cloudinary = require("../utils/cloudinary");

const banner = {
  getAllBanner: async (req, res) => {
    try {
      Banner.find({}, (err, banners) => {
        if (err) {
          return res.status(500).json("Get all banner not successfully");
        }
        return res.status(200).json(banners);
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  createBanner: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "MAIZOSHOP/BANNER",
      });
      let newBanner = new Banner({
        title: req.body.title,
        image: result.secure_url,
      });
      await newBanner.save();
      res.status(201).json("Add banner successfully");
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  },
  getBannerById: async (req, res) => {
    try {
      const Id = req.params.id;

      Banner.findById(Id, (err, banners) => {
        if (err) {
          return res.status(500).json("Can't find Id");
        }
        return res.status(200).json(banners);
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteBanner: async (req, res) => {
    try {
      Banner.findByIdAndRemove(req.params.id, (err, banners) => {
        if (err) {
          res.status(404).json("Can't find Id");
        }
        res.status(200).json("Delete banner successfully");
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = banner;
