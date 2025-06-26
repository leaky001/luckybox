const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { promoteUser, getAllUsers } = require("../controllers/adminController");

router.put("/promote/:id", protect, adminOnly, promoteUser);
router.get("/users", protect, adminOnly, getAllUsers);

module.exports = router;
