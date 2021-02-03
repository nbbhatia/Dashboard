const authRouter = require("express").Router();
const { registration, getAdmin } = require("./auth.controller");

authRouter.post("/AdminRegistartion", registration);
authRouter.get("/getAdmin", getAdmin);
module.exports = authRouter;
