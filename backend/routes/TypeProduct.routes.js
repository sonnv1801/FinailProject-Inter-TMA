const middlewareController = require("../controllers/Middleware.controllers");
const typeProduct = require("../controllers/TypeProduct.controller");

const router = require("express").Router();

router.get("/", typeProduct.getAllType);
router.post("/", middlewareController.verifyToken, typeProduct.createType);
router.delete("/:id", middlewareController.verifyToken, typeProduct.deleteType);

module.exports = router;
