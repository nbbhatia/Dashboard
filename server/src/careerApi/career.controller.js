const router = new require("express").Router();
const CareerModel = require("./model/model");
const JobApply = async (req, res, next) => {
  try {
    // const result = await new CareerModel({
    //   firstName,
    //   lastName,
    //   email,
    //   phoneNumber,
    //   Qualification,
    //   totalExperince,
    //   currentCTC,
    //   expectedCTC,
    // }).save();
    let data = new CareerModel(req.body);
    console.log("data", data);
    const result = await data.save();
    return res.json({
      message: "application submited successfully",
      user: result,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  JobApply,
};
