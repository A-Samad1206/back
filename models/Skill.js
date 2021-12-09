const mongoose = require("mongoose");
const reqObj = { type: String, required: true };

const skill = new mongoose.Schema({
  name: reqObj,
  list: [
    {
      name: reqObj,
      percentage: { type: Number, required: true },
    },
  ],
});

const skillsSchema = new mongoose.Schema(
  { subtitle: reqObj, title: reqObj, message: reqObj, list: [skill] },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillsSchema);
module.exports = Skill;
