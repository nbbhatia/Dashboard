const Careeerrouter = require("express").Router();
const {
  JobApply,
  opening,
  getAllVacancy,
  getApplication,
} = require("./career.controller");
Careeerrouter.post("/apply", JobApply);
Careeerrouter.post("/openPositions", opening);
Careeerrouter.get("/allVacancy", getAllVacancy);
Careeerrouter.get("/allApplication", getApplication);
module.exports = Careeerrouter;
