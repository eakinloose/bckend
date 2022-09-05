const express = require("express");
const Joi = require("joi");
const { Loan } = require("../model/loan");

const router = express.Router();

router.post("/", async (req, res)=> {
  const schema = Joi.object({
    title: Joi.string().min(3).max(10).required(),
   firstname: Joi.string().min(3).max(30).required(),
   lastname: Joi.string().min(3).max(30).required(),
   date_of_birth: Joi.string().min(3).max(30).required(),
   bvn: Joi.number().min(3).max(300000000000000000000).required(),
   marital_status: Joi.string().min(3).max(30).required(),
   email: Joi.string().min(3).max(300).required().email(),
   mobile_number: Joi.number().min(3).max(300000000000000000000).required(),
   whatsapp: Joi.number().min(3).max(300000000000000000000).required(),
   residential_address:  Joi.string().min(3).max(300).required(),
   city:  Joi.string().min(3).max(300).required(),
   state:  Joi.string().min(3).max(300).required(),
   residence_year:Joi.number().min(1).max(300000000000000000000).required(),
   account_number:Joi.number().min(3).max(300000000000000000000).required(),
   account_name:  Joi.string().min(3).max(300).required(),
   bank:  Joi.string().min(1).max(300).required(),
   present_employer:  Joi.string().min(3).max(300).required(),
   employer_address:  Joi.string().min(3).max(300).required(),
   occupation:  Joi.string().min(3).max(300).required(),
   experience_years: Joi.number().min(3).max(300000000000000000000).required(),
   net_monthly_income:  Joi.string().min(3).max(300).required(),
   purpose:  Joi.string().min(3).max(3000).required(),
   loan_amount_request:  Joi.string().min(3).max(300).required(),
   collateral_description: Joi.string().min(3).max(300).required(),
  })

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let loan = await Loan.findOne({ email: req.body.email });
  if (loan)
     return res
        .status(400)
        .send(
           "This user is on your customer base, update loan terms instead."
        );

        const {
          title,
          firstname,
          lastname,
          date_of_birth,
          bvn,
          marital_status,
          email,
          mobile_number,
          whatsapp,
          residential_address,
          city,
          state,
          residence_year,
          account_number,
          account_name,
          bank,
          present_employer,
          employer_address,
          occupation,
          experience_years,
          net_monthly_income,
          purpose,
          loan_amount_request,
          collateral_description,
        } = req.body;

        loan = new Loan({
          title,
          firstname,
          lastname,
          date_of_birth,
          bvn,
          marital_status,
          email,
          mobile_number,
          whatsapp,
          residential_address,
          city,
          state,
          residence_year,
          account_number,
          account_name,
          bank,
          present_employer,
          employer_address,
          occupation,
          experience_years,
          net_monthly_income,
          purpose,
          loan_amount_request,
          collateral_description,
        });

        loan = await loan.save();
        res.send(loan);
})

module.exports = router;