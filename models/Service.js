const mongoose = require("mongoose");
const reqObj = { type: String, required: true };

const service = new mongoose.Schema({
  name: reqObj,
  description: reqObj,
});
const servicesSchema = new mongoose.Schema(
  { subtitle: reqObj, title: reqObj, message: reqObj, list: [service] },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const Service = mongoose.model("Service", servicesSchema);

module.exports = Service;
