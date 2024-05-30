const userService = require("../Services/userService");
const asyncHandler = require("express-async-handler");

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
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// user logout
const logoutUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  try {
    const response = await userService.logoutUser(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
