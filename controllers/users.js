const User = require("../models/user");
const Comment = require("../models/comment");
const Post = require("../models/post");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    const user = new User(req.body);
    console.log(User(req.body))
    user.save((err) => {
      if (err) {
        console.log("*** Email already exists, redirecting user to users/new ***")
        //throw err;
        res.redirect("/users/new");
      } else { res.status(201).redirect("/posts"); }
      
    });
  },

  Profile: (req, res) => {

    // User.find(query)
    // .populate({ 
    //    path: 'pages',
    //    populate: {
    //      path: 'components',
    //      model: 'Component'
    //    } 
    // })
    // .exec(function(err, docs) {});

    User.findOne({ _id: req.params.id })
    .populate({
      path: "posts",
      populate: {
        path: "comments",
        model: 'Comment'
      }
    })      
    .exec((err, users) => {
      console.log(req.params.id)
      if (err) {
        throw err;
      }
      res.render("users/:id", { users: users });
    })

  },

    Comments: (req, res) => {
      // saves new comment into variable
      const comment = new Comment(req.body)
      // saves open session's email address into writer variable
      let writer = req.session.user._id;
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
  
  
      comment.save((err, users) => {
        if (err) {
          throw err;
        }
    
        res.status(201).redirect(window.history.back());
    });
    },
  

  

};

module.exports = UsersController;
