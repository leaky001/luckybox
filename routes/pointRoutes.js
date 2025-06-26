const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { earnPoints, redeemPoints } = require("../controllers/pointController");

router.post("/earn", protect, earnPoints);
router.post("/redeem", protect, redeemPoints);

module.exports = router;
