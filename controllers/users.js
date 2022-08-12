const User = require("../models/user");
const multer = require('multer');

const helpers = require("./public/javascripts/helpers");


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
    User.findOne({ _id: req.params.id }).populate("posts").exec((err, users) => {
      console.log(req.params.id)
      if (err) {
        throw err;
      }
      res.render("users/:id", { users: users });
    })


  }

  // addFriend: (req, res) => {
  //   User.findOne({ email: req.params.id }).populate("friends").exec((err, users) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.render("users/:id", { users: users });
  //   })


  // }

};

module.exports = UsersController;
