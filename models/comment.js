const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// creates comments collection
const CommentSchema = new mongoose.Schema({
  comment: String,
  time: { type: String, default: new Date().toLocaleString("en-GB") },
  writer: {type: String, default: ""}
});

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;