const mongoose = require("mongoose");


const ClickSchema = new mongoose.Schema({
});

const Click = mongoose.model("Click", ClickSchema)

module.exports = Click; 