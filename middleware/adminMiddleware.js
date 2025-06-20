const adminOnly = (req, res, next) => {
  if (!req.user?.isAdmin) return res.status(403).json({ msg: "Admins only" });
  next();
};

module.exports = { adminOnly };
