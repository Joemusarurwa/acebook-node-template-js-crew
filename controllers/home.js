const User = require("../models/user");

const HomeController = {
  Index: (req, res) => {
    if (!req.session.user) {
      var usersSignedIn = false
      console.log("nobody here");
    } else {
      console.log("somones here")
      usersSignedIn = true
    };
    
    let totalUsers = 0
    totalUsers = User.countDocuments({}).then(result => result)
    console.log(totalUsers)
    res.render("home/index", { title: "Acebook", test: usersSignedIn });
  },
};

module.exports = HomeController;
