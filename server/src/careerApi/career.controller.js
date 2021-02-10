const router = new require("express").Router();
const CareerModel = require("./model/model");
const openVacancy = require("./model/openVacancymodel");
const JobApply = async (req, res, next) => {
  try {
    let data = new CareerModel(req.body);
    const result = await data.save();
    return res.json({
      message: "application submited successfully",
      user: result,
    });
  } catch (err) {
    next(err);
  }
};
const opening = async (req, res, next) => {
  try {
    const data = new openVacancy(req.body);
    console.log("data", data);
    await data.save();

    return res.json({
      message: "vacancy added successfully",
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  JobApply,
  opening,
};
