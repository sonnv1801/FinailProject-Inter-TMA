const mongoose = require("mongoose");

const imageProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    id_product: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ImageProduct", imageProductSchema);
