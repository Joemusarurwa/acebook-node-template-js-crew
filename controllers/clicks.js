const { ObjectID } = require("bson");
const Click = require("../models/click");

const ClicksController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    console.log(req.body.click)
    const click = new Click(req.body);
    console.log('this is it' + click)
    click.save((err) => {
      if (err) {
        return console.log(err)
      }
      console.log('click added to db');
      res.sendStatus(201);

    });
  },

  UpdateClick: (req, res) => {
    const filter = { _id : ObjectID("62f10ad66cb3c81bd09d683b") }
    const update = { click: 100 }
    let doc = Click.findOneAndUpdate(filter, update)
    console.log(doc.click)
    }
};

module.exports = ClicksController;
