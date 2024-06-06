const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.header("Authorization");
  if (!bearerHeader) return res.status(401).send("Access Denied");

  const token = bearerHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

const checkAdminRole = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user && user.role === "admin") {
      next();
    } else {
      return res.status(403).send("Access Denied. Admin role required.");
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { verifyToken, checkAdminRole };
