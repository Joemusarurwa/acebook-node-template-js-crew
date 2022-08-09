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
    const post = new Post(req.body);

    post.each
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },

  LikePost: (req, res) => {
    console.log(req.body)
    const action = req.body.action
    if (action === "Like") {
      Post.findOneAndUpdate(req.body, {$inc: { likes_count: 1 }} ).exec( 
        function (err) {
          if (err) {
            console.log(err);
          } else { 
          }
        });
    } else { 
      Post.findOneAndUpdate(req.body, {$inc: { likes_count: -1 }} ).exec( 
        function (err) {
          if (err) {
            console.log(err);
          } else { 
          }
        });
      console.log("Now we would delete that like from the db")
    }
    }
};

module.exports = PostsController;
