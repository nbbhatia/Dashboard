const Careeerrouter = require("express").Router();
const { JobApply, opening } = require("./career.controller");
Careeerrouter.post("/apply", JobApply);
Careeerrouter.post("/openPositions", opening);
module.exports = Careeerrouter;
