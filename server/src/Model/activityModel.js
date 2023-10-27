const mongoose = require("mongoose");
const activityschema = new mongoose.Schema(
  {
    Heading: {
      type: String,
    },
    Description: {
      type: String,
    },
    Photo: {
      type: string,
    },
    Pdf: {
      type: String,
    },
    Month: {
      type: Date,
    },
    Year: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activityschema);
