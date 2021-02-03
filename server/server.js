require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
require("./");
app.get("/", (req, res) => {
  res.send("connection established");
});

app.listen(port, () => {
  console.log(`app listen ,${port}`);
});
