const Comment = require("../models/Comment");

const comments = {
  createComment: async (req, res) => {
    try {
      const newComment = await new Comment({
        customer: req.body.customer,
        id_product: req.body.id_product,
        rate: req.body.rate,
      });
      const cmt = await newComment.save();
      res.status(200).json(cmt);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllComment: async (req, res) => {
    try {
      Comment.find({}, (err, cmts) => {
        if (err) {
          res.status(500).json(err);
        }
        res.status(200).json(cmts);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteComment: async (req, res) => {
    try {
      Comment.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
          res.status(404).json("Can't find Id");
        } else {
          res.status(200).json("Delete product successfully");
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCommentById: async (req, res) => {
    try {
      const Id = req.params.id;
      Comment.findById(Id, (err, cmts) => {
        if (err) {
          return res.status(500).json("Can't find Id..");
        }
        return res.status(200).json(cmts);
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  confirmCMT: async (req, res) => {
    try {
      const results = await Comment.findById(req.params.id);
      if (results.cmtId === req.body.cmtId) {
        await results.updateOne({
          $set: {
            status: 1,
          },
        });
        res.status(200).json("Confirm comment successfully");
      } else {
        res.status(500).json("Can't Confirm comment");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = comments;
