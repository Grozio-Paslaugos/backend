const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getUsers,
  deleteUser,
} = require("../Controllers/userController");

const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.get("/", verifyToken, checkAdminRole, getUsers);
router.get("/:userId", verifyToken, checkAdminRole, getUser);
router.delete("/:userId", verifyToken, checkAdminRole, deleteUser);

module.exports = router;
