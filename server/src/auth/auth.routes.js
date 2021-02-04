const authRouter = require("express").Router();
const {
  registration,
  getAdmin,
  getAdminById,
  login,
  authCheck,
} = require("./auth.controller");

authRouter.post("/AdminRegistartion", registration);
authRouter.get("/getAdmin", getAdmin);
authRouter.get("/getAdminById", getAdminById);
authRouter.post("/login", login);
authRouter.get("/authCheck", authCheck);
module.exports = authRouter;
