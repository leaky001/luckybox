const express = require("express");
const {
  getRewards,
  createReward,
  updateReward,
  deleteReward,
} = require("../controllers/rewardController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", protect, getRewards);
router.post("/", protect, adminOnly, createReward);
router.put("/:id", protect, adminOnly, updateReward);
router.delete("/:id", protect, adminOnly, deleteReward);

module.exports = router;
