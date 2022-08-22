const bcrypt = require("bcrypt");
const joi = require("joi");

const express = require("express");
const { User } = require("../model/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();

router.post("/", async (req, res) => {
   const schema = joi.object({
      email: joi.string().min(3).max(300).required().email(),
      password: joi.string().min(3).max(300).required(),
   });
   const { error } = schema.validate(req.body);

   if (error) return res.status(400).send(error.details[0].message);

   let user = await User.findOne({ email: req.body.email });
   if (!user)
      return res.status(400).send("This email does not exist on our Database");

   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if (!validPassword)
      return res.status(400).send("Check password input characters");

   const token = genAuthToken(user);

   res.send(token);
});

module.exports = router;
