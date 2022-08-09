const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new mongoose.Schema({
  message: String,
  likes: Number,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, 

{ timestamps: true });



// const CommentSchema = new mongoose.Schema({
//   comment: String,

// });





// { like: Number });

// const likeSchema = new mongoose.Schema({
//   timestamp : Number,
//   photo : {type: Schema.Types.ObjectId, ref: 'photo'},
//   user : {type: Schema.Types.ObjectId, ref: 'user'}
// });

// const happy = mongoose.model("Likes", likeSchema)



// const Comment = mongoose.model('Comment', CommentSchema);
const Post = mongoose.model("Post", PostSchema);


module.exports = Post;
// module.exports = Comment;