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
    const postId = { _id: req.body._id}
    let userEmail = req.session.user.email
    const actionz = req.body.actionz
    if (actionz === "Like") {
      // Need to add and if/else that checks if userEmail alread in posts like_count array! If it is, don't add a new like. 
      // Mongo command db.posts.find( { "_id" : ObjectId("62f2dee97d38803437b745ce")}, { liked_by: "test200@example.com"  } )
      Post.findOneAndUpdate(postId, { $push: { liked_by: userEmail } } ).exec()
      Post.findOneAndUpdate(postId, { $inc: { likes_count: 1 } } ).exec( 
        function (err) {
          if (err) {
            console.log(err);
          } else { 
            console.log(userEmail + " liked post with ID: " + req.body._id)
          }
        });
    } else { 
      Post.findOneAndUpdate(req.body, {$inc: { likes_count: -1 }} ).exec( 
        function (err) {
          if (err) {
            console.log(err);
          } else { 
            console.log(userEmail + " unliked post with ID: " + req.body._id)
          }
        });
    }
    }
};

module.exports = PostsController;
