const User = require("../models/user");

const HomeController = {
  Index: (req, res) => {
    let totalUsers = 0
    totalUsers = User.countDocuments({}).then(result => result)
    console.log(totalUsers)
    res.render("home/index", { title: "Acebook" });
  },
};

module.exports = HomeController;
