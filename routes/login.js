const bcrypt = require("bcrypt");
const joi = require("joi");

const express = require("express");
const { User } = require("../model/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();

router.post("/", async (req, res) => {
   const schema = joi.object({
      coreID: joi.string().min(3).max(300).required(),
      password: joi.string().min(3).max(300).required(),
   });
   const { error } = schema.validate(req.body);

   if (error) return res.status(400).send(error.details[0].message);

   let user = await User.findOne({ coreID: req.body.coreID });
   if (!user)
      return res.status(400).send("This coreID does not exist on our Database");

   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if (!validPassword) {
      return res.status(400).send("Check password input characters");
   }

   const token = genAuthToken(user);

   res.send(token);
});

module.exports = router;
