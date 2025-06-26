const mongoose = require("mongoose");

const pointRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["earn", "redeem"] },
  points: Number,
  description: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PointRecord", pointRecordSchema);
