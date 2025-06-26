const User = require("../models/userModel");
const Reward = require("../models/rewardModel");
const PointRecord = require("../models/pointRecordModel");

exports.earnPoints = async (req, res) => {
  const { amount } = req.body;
  const points = Math.floor(amount / 10);

  req.user.points += points;
  await req.user.save();

  await PointRecord.create({ userId: req.user._id, type: "earn", points, description: "Purchase" });

  res.json({ message: "Points earned successfully", pointsEarned: points, totalPoints: req.user.points });
};

exports.redeemPoints = async (req, res) => {
  const reward = await Reward.findById(req.body.rewardId);
  if (req.user.points < reward.points)
    return res.status(400).json({ message: "Not enough points" });

  req.user.points -= reward.points;
  await req.user.save();

  await PointRecord.create({ userId: req.user._id, type: "redeem", points: reward.points, description: reward.title });

  res.json({
    message: "Reward redeemed successfully",
    remainingPoints: req.user.points,
    rewardTitle: reward.title
  });
};
