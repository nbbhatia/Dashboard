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
// const authCheck = async (res, req, next) => {
//   try {
//     const { token } = res.cookies;

//     console.log("token", token);
//     if (token === null) {
//       return res.sendStatus(401);
//     }
//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       // return res.send(req.user);
//       // console.log("req.user", req.user);
//       //   return res.status(200).json({
//       //     success: true,
//       //     message: "Login successful",
//       //     user: req.user,
//       //   });
//     });
//   } catch (err) {
//     return next(err);
//   }
// };
const authCheck = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("token", token);
    if (token == null) {
      return res.sendStatus(401).json({
        message: "user not found",
      });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: req.user,
      });
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registration,
  getAdmin,
  getAdminById,
  login,
  authCheck,
};
