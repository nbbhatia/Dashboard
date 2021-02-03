const cookieParser = require("cookie-parser");
// const cors = require("cors");
const morgan = require("morgan");

const isDev = "development";
const main = (express, app) => {
  if (isDev) {
    app.use(morgan("dev"));
  }

  // app.use(cors());

  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  app.use(cookieParser());
};

module.exports = main;
