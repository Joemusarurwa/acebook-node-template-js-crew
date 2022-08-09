const { ObjectID } = require("bson");
const Click = require("../models/click");
const mongoose = require("mongoose");


const ClicksController = {

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
    console.log(req.body)

   const currentClick = Click.find( { _id: "62f1175012ae9f0b30b6acf7" }, { _id: 0  } ).exec()

    Click.findOneAndUpdate( { _id: "62f1175012ae9f0b30b6acf7" }, {$inc: { click: 1 }} ).exec( 
      function (err) {
        if (err) {
          console.log(err);
        } else { 
        }
      }
    );
  },
};

module.exports = ClicksController;
