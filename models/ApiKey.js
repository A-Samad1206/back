const mongoose = require("mongoose");

const apiKeySchema = new mongoose.Schema(
  { apiKey: { type: String, required: true, minlength: 10 } },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const ApiKey = mongoose.model("ApiKey", apiKeySchema);
module.exports = ApiKey;
