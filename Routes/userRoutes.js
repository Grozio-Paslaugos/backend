// server

const express = require("express");
const router = express.Router();

// User functions

const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getUsers,
  deleteUser,
} = require("../Controllers/userController");

// middleware functions

const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// User routes
// http://localhost:5000/api/users/<...>
// Requires Bearer Token (except register/login)
/*
 *     "name": "tadas",
 *     "email": "tadas@mail.com",
 *     "password": "123123"
 *     "phone": "+37012312312"
 */

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.get("/", verifyToken, checkAdminRole, getUsers); // adm
router.get("/:userId", verifyToken, checkAdminRole, getUser); //! paramus galima keisti controleryje :id/:userId
router.delete("/:userId", verifyToken, checkAdminRole, deleteUser); // adm

module.exports = router;
