const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    Photo: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("About", aboutSchema);
