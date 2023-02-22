const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      require: true,
    },
    id_product: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
      default: "Product very good 10đ",
    },
    rate: {
      type: Number,
      require: true,
      default: 5,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
