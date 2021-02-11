const { ObjectId } = require("mongoose").Types;
const router = new require("express").Router();
const CareerModel = require("./model/model");
const openVacancy = require("./model/openVacancymodel");
const JobApply = async (req, res, next) => {
  try {
    let data = req.body;
    console.log("data", data);
    const isMatch = await openVacancy.findOne({ _id: ObjectId(data.job) });
    if (!isMatch) {
      return res.json({
        message: "userNot Found",
        status: 300,
      });
    } else {
      let d = new CareerModel(data);
      const result = await d.save();
      return res.json({
        message: "data save succefully",
        status: 200,
        user: result,
      });
    }
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
