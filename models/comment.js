const mongoose = require("mongoose");

// creates comments collection
const CommentSchema = new mongoose.Schema({
  // adds comment field
  comment: String,
  // adds time field
  time: { type: String, default: new Date().toLocaleString("en-GB") },
  // adds writer field
  writer: {type: String, default: ""},
  nameOfWriter: {type: String, default: ""}
});

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;