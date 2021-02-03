const express = require("express");
const router = new express.Router();
const cookieParser = require("cookie-parser");
const AdminModel = require("./model/adminmodel");
router.use(cookieParser("some_secret_1234"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
const getAdmin = async (req, res, next) => {
  try {
    const getData = await AdminModel.find();
    return res.send(getData);
  } catch (err) {
    return next(err);
  }
};
const getAdminById = async (req, res, next) => {
  try {
    const { email } = req.body;
    const getData = await AdminModel.findOne({ email });
    return res.send(getData);
  } catch (err) {
    return next(err);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(303).json({
        sucess: false,
        message: "User not found!",
      });
    }
    const isMatch = await bcrypt.compareSync(password, admin.password);
    console.log("isMatch", isMatch);
    if (!isMatch) {
      return res.status(303).json({
        sucess: false,
        message: "Invalid login details ",
      });
    }
    // if login sucessful
    const token = await jwt.sign({ _id: admin._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .json({
        sucess: true,
        message: "login Sucessfull",
        token,
      });
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  registration,
  getAdmin,
  getAdminById,
  login,
};
