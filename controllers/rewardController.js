const Reward = require("../models/Reward");

const getRewards = async (req, res) => {
  const rewards = await Reward.find();
  res.json(rewards);
};

const createReward = async (req, res) => {
  const reward = await Reward.create(req.body);
  res.status(201).json(reward);
};

const updateReward = async (req, res) => {
  const reward = await Reward.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(reward);
};

const deleteReward = async (req, res) => {
  await Reward.findByIdAndDelete(req.params.id);
  res.json({ msg: "Reward deleted" });
};

module.exports = { getRewards, createReward, updateReward, deleteReward };
