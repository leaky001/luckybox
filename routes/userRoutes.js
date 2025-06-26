const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getPointHistory } = require("../controllers/userController");

router.get("/history", protect, getPointHistory);

module.exports = router;
