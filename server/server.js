require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
app.get("/", (req, res) => {
  res.send("connection established");
});
console.log("process.env.PORT", process.env);
app.listen(port, () => {
  console.log(`app listen ,${port}`);
});
