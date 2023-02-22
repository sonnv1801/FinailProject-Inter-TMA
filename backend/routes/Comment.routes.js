const comments = require("../controllers/Comment.controller");

const router = require("express").Router();

router.post("/", comments.createComment);
module.exports = router;
