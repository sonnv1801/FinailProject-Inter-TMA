const mongoose = require("mongoose");

const typeProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 20,
      unique: true,
      default: "Iphone",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TypeProduct", typeProductSchema);
