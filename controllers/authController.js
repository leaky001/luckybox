const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ firstName, lastName, email, password: hashed });

  res.status(201).json({
    message: "User registered successfully",
    user: { id: user._id, firstName, lastName, email, role: user.role },
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: "Invalid credentials" });

  res.json({
    message: "Login successful",
    user: { id: user._id, firstName: user.firstName, email: user.email, role: user.role },
    token: generateToken(user._id),
  });
};

exports.logout = async (req, res) => {
  res.json({ message: "User logged out successfully" });
};
