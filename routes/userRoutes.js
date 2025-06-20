const express = require("express");
const {
  getProfile,
  buyItem,
  redeemReward,
  viewHistory,
  getAllUsers,
  promoteToAdmin,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/me", protect, getProfile);
router.post("/buy", protect, buyItem);
router.post("/redeem", protect, redeemReward);
router.get("/history", protect, viewHistory);

// Admin
router.get("/admin/users", protect, adminOnly, getAllUsers);
router.patch("/admin/promote/:id", protect, adminOnly, promoteToAdmin);

module.exports = router;
