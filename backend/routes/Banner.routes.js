const banner = require("../controllers/Banner.controller");
const upload = require("../utils/multer");

const router = require("express").Router();

router.post("/", upload.single("image"), banner.createBanner);
router.get("/:id", banner.getBannerById);
router.get("/", banner.getAllBanner);
router.delete("/:id", banner.deleteBanner);

module.exports = router;
