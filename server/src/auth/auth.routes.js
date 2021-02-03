const authRouter = require("express").Router();
const {
  registration,
  getAdmin,
  getAdminById,
  login,
} = require("./auth.controller");

authRouter.post("/AdminRegistartion", registration);
authRouter.get("/getAdmin", getAdmin);
authRouter.get("/getAdminById", getAdminById);
authRouter.post("/login", login);
module.exports = authRouter;
