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
   password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300, 
   },
   phone: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 300, 
   },
   coreID: {
      type: String,
      minlength: 3,
      maxlength: 300, 
   },
   host: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300, 
   },
   // verified: Boolean
});

const User = mongoose.model("User", userSchema);

exports.User = User;
