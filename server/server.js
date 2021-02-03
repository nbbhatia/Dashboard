require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8001;
const db = require("./src/database/db");
const apis = require("./src/AllRoutes/index.routes");
const middleware = require("./src/middlewares/index.middleware");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

middleware(express, app);
app.use("/api", apis);

app.listen(port, () => {
  console.log(`app listen ,${port}`);
});
