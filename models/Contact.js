const mongoose = require("mongoose");
const reqObj = { type: String, required: true };

const contactsSchema = new mongoose.Schema(
  { subtitle: reqObj, title: reqObj, message: reqObj },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactsSchema);
module.exports = Contact;
