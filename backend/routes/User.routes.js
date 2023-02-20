const middlewareController = require("../controllers/Middleware.controllers");
const userController = require("../controllers/User.controller");

const router = require("express").Router();

router.get("/", userController.getAllUsers);
router.post(
  "/:id",
  middlewareController.verifyToken,
  userController.deleteUser
);
router.put("/:id", middlewareController.verifyToken, userController.updateUser);

module.exports = router;
