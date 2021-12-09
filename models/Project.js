const mongoose = require("mongoose");
const reqObj = { type: String, required: true };

const project = new mongoose.Schema({
  name: reqObj,
  description: reqObj,
  image: reqObj,
  links: [{ label: reqObj, link: reqObj }],
});

const projectsSchema = new mongoose.Schema(
  { subtitle: reqObj, title: reqObj, message: reqObj, list: [project] },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectsSchema);
module.exports = Project;
