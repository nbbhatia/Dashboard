const { Schema, model } = require("mongoose");
const openVacancy = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
);

module.exports = new model("openVacancy", openVacancy);
