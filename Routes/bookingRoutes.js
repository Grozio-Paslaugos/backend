/** @format */

const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBooking,
  getBookings,
  getBookingsByUser,
  updateBooking,
  deleteBooking,
} = require("../Controllers/bookingController");
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

router.post("/create", verifyToken, createBooking);
router.get("/", verifyToken, getBookings);
router.get("/user/:userId", verifyToken, getBookingsByUser);
router.get("/:bookingId", verifyToken, getBooking);
router.put("/update/:bookingId", verifyToken, updateBooking);
router.delete("/delete/:bookingId", verifyToken, deleteBooking);

module.exports = router;
