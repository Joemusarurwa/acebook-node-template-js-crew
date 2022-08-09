const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: String,
  // post_id: _id in the posts table or this._id from the hbs file
  // comment_author:
  // time: true
});

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;