const Comment = require("../models/Comment");

const comments = {
  createComment: async (req, res) => {
    try {
      const newComment = await new Comment({
        id_user: req.body.id_user,
        id_product: req.body.id_product,
        comment: req.body.comment,
        rate: req.body.rate,
      });
      const cmt = await newComment.save();
      res.status(200).json(cmt);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = comments;
