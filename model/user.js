const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
   },
   email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
      unique: true,
   },
   occupation: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
