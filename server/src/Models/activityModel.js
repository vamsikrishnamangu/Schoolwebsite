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
      type: String,
    },
    Pdf: {
      type: String,
    },
    Month: {
      type: String,

      enum: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    year: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activityschema);
