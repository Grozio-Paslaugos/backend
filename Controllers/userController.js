const userService = require("../Services/userService");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// user register

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const user = await userService.registerUser(name, email, password, phone);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// user login

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(400).json({ error: "Login failed: " + error.message });
  }
});

// user logout

const logoutUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  try {
    const response = await userService.logoutUser(userId);
    res.status(200).json({ message: "Logged out sucessfully" });
  } catch (error) {
    res.status(400).json({ error: "Logout failed: " + error.message });
  }
});

// get user

const getUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get users

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete user

const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await userService.deleteUser(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getUsers,
  deleteUser,
};
