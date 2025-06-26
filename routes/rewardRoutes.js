const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { createReward, getReward, updateReward, deleteReward } = require("../controllers/rewardController");

router.get("/", protect, getReward);
router.post("/", protect, adminOnly, createReward);
router.put("/:id", protect, adminOnly, updateReward);
router.delete("/:id", protect, adminOnly, deleteReward);

module.exports = router;
