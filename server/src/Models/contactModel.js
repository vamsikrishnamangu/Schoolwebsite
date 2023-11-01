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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Contact", contactSchema);
