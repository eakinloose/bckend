const bcrypt = require("bcrypt");
const joi = require("joi");

const express = require("express");
const { User } = require("../model/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();

router.post("/", async (req, res) => {
   const schema = joi.object({
      name: joi.string().min(3).max(30).required(),
      email: joi.string().min(3).max(300).required().email(),
      password: joi.string().min(3).max(300).required(),
      phone: joi.number().min(3).max(3000000000000).required(),
      coreID: joi.string().min(3).max(300),
      host: joi.string().min(3).max(300).required(),
   });

   const { error } = schema.validate(req.body);

   if (error) return res.status(400).send(error.details[0].message);

   let user = await User.findOne({ coreID: req.body.coreID });
   if (user)
      return res
         .status(400)
         .send(
            "user exist, try using forgotpassword to login in with this coreID"
         );

   const { name, email, password, phone, host } = req.body;

   user = new User({
      name,
      email,
      password,
      phone,
      coreID: `${host}-${phone.slice(phone.length - 6)}`,
      host,
   });

   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password, salt);

   user = await user.save();

   const token = genAuthToken(user);
   res.send(token);
});

module.exports = router;
