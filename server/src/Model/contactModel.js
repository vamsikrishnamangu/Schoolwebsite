const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    ReEnteremail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Contact", contactSchema);
