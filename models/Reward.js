const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
});

module.exports = mongoose.model("Reward", rewardSchema);
