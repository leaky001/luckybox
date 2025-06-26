const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", userSchema);
