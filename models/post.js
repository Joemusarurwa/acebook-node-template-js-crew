const mongoose = require("mongoose");
const { Schema } = mongoose;

// creates posts collection
const PostSchema = new mongoose.Schema({
  message: String,
  likes_count: Number,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  writer: {type: String, default: ""},
  nameOfWriter: {type: String, default: ""},
  timePosted: { type: String, default: new Date().toLocaleString("en-GB") }
});

const Post = mongoose.model("Post", PostSchema);


module.exports = Post;
