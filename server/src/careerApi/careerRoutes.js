const Careeerrouter = require("express").Router();
const { JobApply, opening, getAllVacancy } = require("./career.controller");
Careeerrouter.post("/apply", JobApply);
Careeerrouter.post("/openPositions", opening);
Careeerrouter.get("/allVacancy", getAllVacancy);
module.exports = Careeerrouter;
