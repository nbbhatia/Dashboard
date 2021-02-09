const apiRoutes = require("express").Router();
const authRoutes = require("../auth/auth.routes");
const careerRoutes = require("../careerApi/careerRoutes");
apiRoutes.get("/", (req, res) => {
  res.sendStatus(200);
});

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/career", careerRoutes);
module.exports = apiRoutes;
