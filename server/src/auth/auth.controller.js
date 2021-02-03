const express = require("express");
const router = new express.Router();
const cookieParser = require("cookie-parser");
const AdminModel = require("./model/adminmodel");
router.use(cookieParser("some_secret_1234"));

const registration = async (req, res, next) => {
  try {
    const AdminData = new AdminModel(req.body);
    const token = await AdminData.generateAuthToken();
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 50000,
      })
      .json({
        sucess: true,
      });
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  registration,
};
