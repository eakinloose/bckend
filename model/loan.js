const { number } = require("joi");
const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 10,
   },
   firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
   },
   lastname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
   },
   date_of_birth: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
   },
   bvn: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 30000000000000000000,
   },
   marital_status: {
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
   mobile_number: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 30000000000000000000,
   },
   whatsapp: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 30000000000000000000,
   },
   residential_address: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   city: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   state: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   residence_year: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength: 30000000000000000000,
   },
   account_number: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 30000000000000000000,
   },
   account_name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   bank: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
   },
   present_employer: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   employer_address: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   occupation: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   experience_years: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 30000000000000000000,
   },
   net_monthly_income: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 300,
   },
   purpose: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 3000,
   },
   loan_amount_request: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
   },
   collateral_description:{
    type: String,
    required: true,
    minlength: 3,
    maxlength: 300,
   }
});

const Loan = mongoose.model("Loan", loanSchema);

exports.Loan = Loan;
