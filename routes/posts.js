const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/new", PostsController.New);
router.post("/like", PostsController.Like);
// router.post(`/posts/${this._id}/likes`, PostsController.Index)
router.post("/:id/new-comment", PostsController.Comments)

module.exports = router;


// router.post(`/posts/${this._id}/likes`,