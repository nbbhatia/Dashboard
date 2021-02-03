const { Schema, model } = require("mongoose");
const jwt = require("jwt");
const bcrypt = require("bcrypt");
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
module.exports = model("Admin", AdminSchema);
