const Post = require("../models/post");

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
    console.log(req.body)
    console.log(req.body.message)
    const post = new Post(req.body);

    post.each
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },

  Like  : (req, res) => {
    const postId = { _id: req.body._id}
    Post.findOneAndUpdate(postId, { $push: { liked_by: req.session.user.email } } ).exec()
    Post.findOneAndUpdate(postId, { $inc: { likes_count: 1 } } ).exec( 
      function (err) {
        if (err) {
          console.log(err);
        } else { 
          console.log(req.session.user.email + " 👍 liked post with ID: " + req.body._id)
        }
      }); 
    },
};

module.exports = PostsController;
