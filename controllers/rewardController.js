const Reward = require("../models/rewardModel");

exports.createReward = async (req, res) => {
  const reward = await Reward.create(req.body);
  res.status(201).json({ message: "Reward created successfully", reward });
};

exports.getReward = async (req, res) => {
  const reward = await Reward.findOne();
  res.json({ message: "Available reward", reward });
};

exports.updateReward = async (req, res) => {
  const updatedReward = await Reward.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Reward updated successfully", updatedReward });
};

exports.deleteReward = async (req, res) => {
  await Reward.findByIdAndDelete(req.params.id);
  res.json({ message: "Reward deleted successfully" });
};
