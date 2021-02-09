const Careeerrouter = require("express").Router();
const { JobApply } = require("./career.controller");
Careeerrouter.post("/apply", JobApply);
module.exports = Careeerrouter;
