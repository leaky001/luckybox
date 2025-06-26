const PointRecord = require("../models/pointRecordModel");

exports.getPointHistory = async (req, res) => {
  const records = await PointRecord.find({ userId: req.user._id });
  let earned = 0, redeemed = 0;
  records.forEach((rec) => {
    if (rec.type === "earn") earned += rec.points;
    else redeemed += rec.points;
  });

  res.json({
    message: "Transaction record found",
    history: { earned, redeemed, balance: req.user.points }
  });
};
