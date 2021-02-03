const authRouter = require("express").Router();
const { registration } = require("./auth.controller");

authRouter.post("/AdminRegistartion", registration);
module.exports = authRouter;
