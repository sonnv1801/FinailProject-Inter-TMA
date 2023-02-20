const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      maxlength: 20,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    newPrice: {
      type: Number,
      require: true,
    },
    oldPrice: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: "stocking",
    },
    rates: {
      type: Number,
      require: true,
      default: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
