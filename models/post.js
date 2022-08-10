const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String ,
  likes_count: Number ,
  liked_by: { type: Array, default: [] },
  timePosted: { type: Date, default: Date.now },
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
