const mongoose = require("mongoose");
const reqObj = { type: String, required: true };

const introSchema = new mongoose.Schema(
  {
    aboutMe: reqObj,
    resumeLink: reqObj,
    myPic: reqObj,
    myInfo: {
      name: reqObj,
      phoneNo: reqObj,
      whatsapp: reqObj,
      github: reqObj,
      website: reqObj,
      email: reqObj,
      linkedIn: reqObj,
      twitter: reqObj,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const Intro = mongoose.model("Intro", introSchema);
module.exports = Intro;
