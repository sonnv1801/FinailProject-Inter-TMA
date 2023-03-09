const comments = require("../controllers/Comment.controller");
const middlewareController = require("../controllers/Middleware.controllers");

const router = require("express").Router();

router.get("/", comments.getAllComment);
router.post("/", middlewareController.verifyToken, comments.createComment);
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  comments.deleteComment
);
router.get("/:id", comments.getCommentById);
router.put("/:id", comments.confirmCMT);
module.exports = router;
