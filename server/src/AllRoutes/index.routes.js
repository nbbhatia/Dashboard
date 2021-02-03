const apiRoutes = require("express").Router();
const authRoutes = require("../auth/auth.routes");

apiRoutes.get("/", (req, res) => {
  res.sendStatus(200);
});

apiRoutes.use("/auth", authRoutes);


module.exports = apiRoutes;
