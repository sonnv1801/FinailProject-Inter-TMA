const imageProduct = require("../controllers/ImageProduct.controller");
const upload = require("../utils/multer");

const router = require("express").Router();

router.get("/", imageProduct.getAllImgPrd);
router.post("/", upload.single("image"), imageProduct.createImgPrd);
router.delete("/:id", imageProduct.deleteImgPrd);

module.exports = router;
