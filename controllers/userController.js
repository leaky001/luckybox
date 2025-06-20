const User = require("../models/User");

const getProfile = async (req, res) => {
  res.json(req.user);
};

const buyItem = async (req, res) => {
  const points = parseInt(req.body.points);
  req.user.points += points;
  req.user.history.push({ action: "Earned", points });
  await req.user.save();
  res.json({ msg: "Points added", total: req.user.points });
};

const redeemReward = async (req, res) => {
  const { reward } = req.body;
  if (req.user.points < reward.cost)
    return res.status(400).json({ msg: "Not enough points" });

  req.user.points -= reward.cost;
  req.user.history.push({ action: `Redeemed ${reward.title}`, points: -reward.cost });
  await req.user.save();
  res.json({ msg: "Reward redeemed" });
};

const viewHistory = async (req, res) => {
  res.json(req.user.history);
};

const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

const promoteToAdmin = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.isAdmin = true;
  await user.save();
  res.json({ msg: "User promoted to admin" });
};

module.exports = {
  getProfile,
  buyItem,
  redeemReward,
  viewHistory,
  getAllUsers,
  promoteToAdmin,
};
