const orderCotroller = require("../controllers/Order.controller");

const router = require("express").Router();

router.post("/", orderCotroller.createOrder);
router.get("/", orderCotroller.getOrder);
router.get("/user/:userId/orders/products", orderCotroller.getProductOrder);

module.exports = router;
