const middlewareController = require("../controllers/Middleware.controllers");
const orderCotroller = require("../controllers/Order.controller");

const router = require("express").Router();

router.post("/", orderCotroller.createOrder);
router.get("/", orderCotroller.getOrder);
router.get("/:id", orderCotroller.getOrderById);
router.put("/:id", orderCotroller.confirmOrder);
router.get("/today/1ngay", orderCotroller.getOrderToday);
router.get("/user/:userId/orders/products", orderCotroller.getProductOrder);
router.delete(
  "/:id",
  middlewareController.verifyToken,
  orderCotroller.deleteOrder
);
module.exports = router;
