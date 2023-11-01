const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    Photo: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("About", aboutSchema);
