const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    Heading: {
      type: String,
    },
    Description: {
      type: String,
    },
    Photo: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Home", homeSchema);
