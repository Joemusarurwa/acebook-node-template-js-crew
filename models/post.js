const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String ,
  likes_count: Number ,
  timePosted: { type: Date, default: Date.now },
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
