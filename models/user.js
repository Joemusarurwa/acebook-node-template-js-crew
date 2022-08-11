const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  surname: { type: String, required: true },
  DOB: { type: String, required: true },
  time: { type: Date, default: Date.now },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


UserSchema.plugin(uniqueValidator);

const validatorTest = UserSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema);

console.log(validatorTest.errors)
console.log(User)

module.exports = User;
