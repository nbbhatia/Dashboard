const router = new require("express").Router();
const CareerModel = require("./model/model");
const openVacancy = require("./model/openVacancymodel");
const JobApply = async (req, res, next) => {
  try {
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
const getApplication = async (req, res) => {
  try {
    const result = await CareerModel.find();
    return res.send(result);
  } catch (err) {
    next(err);
  }
};
const opening = async (req, res, next) => {
  try {
    const data = new openVacancy(req.body);
    await data.save();

    return res.json({
      message: "vacancy added successfully",
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};
const getAllVacancy = async (req, res, next) => {
  try {
    const result = await openVacancy.find();
    return res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  JobApply,
  opening,
  getAllVacancy,
  getApplication,
};
