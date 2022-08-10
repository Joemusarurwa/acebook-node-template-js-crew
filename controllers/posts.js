const Post = require("../models/post");
const Comment = require("../models/comment");
const { post } = require("../app");

const PostsController = {
  Index: (req, res) => {
    Post.find().populate("comments").exec((err, posts) => {
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
    let writer = req.session.user.email
    post.writer = writer
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },

  Comments: (req, res) => {
    const comment = new Comment(req.body)
    
    console.log(comment)
    let writer = req.session.user.email;
    comment.writer = writer;
    // let filter = {_id: req.params.id}
    console.log("this is the new comment:" + comment)
    console.log(req.body.comment)
    console.log(req.params.id)
    // console.log(Post.find(filter).exec())
    // console.log(Post.find(req.params.id).exec())
    
    // .comments.push(comment).exec()
    const this_post = Post.findById(req.params.id).exec()
  
    console.log("this post is:" + this_post)
    // Post.findById(req.params.id).push(comment)
    console.log("find by id")
    console.log(Post.findById(req.params.id).exec())

    // var id = '62f387cb5ad3ff2f41692fbd';
    Post.findById(req.params.id, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        docs.comments.push(comment);
        console.log("doc : ", docs,
          "comments : ", docs.comments,
                    "id : ", docs.id);
        docs.save()
    }
   
});



// findby idddddd!!!!
    // let comment = new Comment({comment: req.params.comment})
    
    // comment.save()
    // post.comments.push(comment)

    comment.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
  });
  },

};



module.exports = PostsController;
