const { Schema, model } = require("mongoose");

const careerModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  Qualification: {
    type: String,
  },
  totalExperince: {
    type: String,
  },
  currentCTC: {
    type: Number,
  },
  expectedCTC: {
    type: Number,
  },
  job: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});
module.exports = new model("CareerApplications", careerModel);
