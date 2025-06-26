const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  title: String,
  points: Number,
});

module.exports = mongoose.model("Reward", rewardSchema);
