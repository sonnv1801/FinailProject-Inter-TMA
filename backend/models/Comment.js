const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    customer: {
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      fullname: {
        type: String,
        required: true,
        default: "Khách Hàng Ẩn Tên",
      },
      email: {
        type: String,
        required: true,
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
    id_product: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
