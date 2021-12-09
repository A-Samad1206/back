const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
  const conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`
  );
};

module.exports = connectDB;
