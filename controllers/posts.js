
const Post = require("../models/post");
const Comment = require("../models/comment");

const User = require("../models/user");
const express = require("express");
const app = express();

const PostsController = {
  Index: (req, res) => {
    Post.find().populate("comments").exec((err, posts, users) => {
      if (err) {
        throw err;
      }
      posts.reverse()
      
      res.render("posts/index", { posts: posts, users: users });
  
    });
  },

  New: (req, res) => {
    res.render("posts/new", {});
  },

  Create: (req, res) => {
    // saves a new post within a variable
    const post = new Post(req.body);
    // saves open session's email address into writer variable
    let writer = req.session.user.email
    let nameOfWriter = req.session.user.first_name
    let surnameOfWriter = req.session.user.surname
    // accesses writer field for this new post, saves the writer variable 
    // (the current session's email address) inside
    post.writer = writer
    post.nameOfWriter = `${nameOfWriter} ${surnameOfWriter}`


    console.log("session id", req.session.id)
    // finds the user who is logged in and looks at their row in the users collection
    User.findById(req.session.user, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
          // pushes new post id inside the posts array in this user's collection
          docs.posts.push(post);
          console.log(docs)
          console.log(post)
          // saves update
          docs.save()
      }
    }),
         
       
    // saves collection
    post.save((err) => {
      if (err) {
        throw err;
      }
      // finds the user within users collection by id
      res.status(201).redirect("/posts");
    });
  },

  Comments: (req, res) => {
    // saves new comment into variable
    const comment = new Comment(req.body)
    // saves open session's email address into writer variable
    let writer = req.session.user.email;
    // accesses writer field for this new comment, saves the writer variable 
    // (the current session's email address) inside
    comment.writer = writer;
    let nameOfWriter = req.session.user.first_name
    let surnameOfWriter = req.session.user.surname
    comment.nameOfWriter = `${nameOfWriter} ${surnameOfWriter}`
    // finds the post within posts collection by id
    Post.findById(req.params.id, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        // pushes new comment id inside the comments array for the post
        docs.comments.push(comment);
        // saves update
        docs.save()
    }
   
    });


    comment.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
  });
  },

  Images: (req, res) => {
    console.log("hello")
    res.status(201).redirect("/posts");
  },

  
};

module.exports = PostsController;
