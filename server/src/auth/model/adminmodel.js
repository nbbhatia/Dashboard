const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: { type: String },
    },
  ],
});
// token generate
AdminSchema.methods.generateAuthToken = async function () {
  try {
    const tokenKey = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: tokenKey });
    await this.save();
    return tokenKey;
  } catch (err) {
    console.log("err", err);
  }
};
// password hashing
AdminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
module.exports = model("Admin", AdminSchema);
