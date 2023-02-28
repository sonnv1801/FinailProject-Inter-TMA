const product = require("../controllers/Product.controller");
const upload = require("../utils/multer");

const router = require("express").Router();

router.get("/", product.getAllProduct);
router.get("/:id", product.getProductById);
router.get("/products/:type/:limit", product.getProductByType);
router.post("/", upload.single("image"), product.createProduct);
router.put("/:id", upload.single("image"), product.updateProduct);
router.delete("/:id", product.deleteProduct);
router.get("/10days/prd", product.getAllBy10Day);
router.get("/ramdom/prd", product.RamdomProduct);
router.get("/similar/:productId", product.similarProduct);

module.exports = router;
