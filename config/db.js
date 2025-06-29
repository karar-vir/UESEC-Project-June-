const mongoose = require('mongoose');
require('dotenv').config();

async function dbInit() {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

module.exports = { dbInit };
