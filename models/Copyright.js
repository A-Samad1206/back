const mongoose = require("mongoose");
const reqObj = { type: String, required: true };

const copyrightSchema = new mongoose.Schema(
  { headingOne: reqObj, headingTwo: reqObj },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const Copyright = mongoose.model("Copyright", copyrightSchema);
module.exports = Copyright;
