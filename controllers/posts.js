const Post = require("../models/post");
const Comment = require("../models/comment")

const PostsController = {
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
      }
      posts.reverse()
      res.render("posts/index", { posts: posts });
  
    });
  },

  New: (req, res) => {
    res.render("posts/new", {});
  },

  Create: (req, res) => {
    const post = new Post(req.body);

    // post.each
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },

  Comments: (req, res) => {
    const comment = new Comment(req.body)
    comment.save((err) => {
      if (err) {
        throw err;
      }
    // create a new comment
    // connection between post and comment
    // Post.find((err, posts) => {
    //   if (err) {
    //     throw err;
    //   }
    // console.log(req.body.comment)
    // console.log(this._id)
  
    // // const comment = new Comment(req.body.comment);

    // db.comments.update( { "_id" : ObjectId(this._id)}, { "comment": comment })

    // console.log(comment)

      // findOneandUpdate
      res.status(201).redirect("/posts");
  });
  },

};



module.exports = PostsController;
