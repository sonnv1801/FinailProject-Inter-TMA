const typeProduct = require("../controllers/TypeProduct.controller");

const router = require("express").Router();

router.get("/", typeProduct.getAllType);
router.post("/", typeProduct.createType);
router.delete("/:id", typeProduct.deleteType);

module.exports = router;
