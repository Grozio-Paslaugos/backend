// server

const express = require("express");
const router = express.Router();

// Booking functions

const {
  createBooking,
  getBooking,
  getBookings,
  getBookingsByUser,
  updateBooking,
  deleteBooking,
} = require("../Controllers/bookingController");

// middleware functions

const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// Booking routes
// http://localhost:5000/api/bookings/<...>
// Requires Bearer Token
/*
 *     "userId": "6658fc1e013eed7c95000d98",
 *     "procedureId": "6659008e9fd7dabce715bfad",
 *     "bookingDatetime": "2024-06-03T12:30:00Z"
 */

router.post("/create", verifyToken, createBooking);
router.get("/", verifyToken, getBookings);
router.get("/user/:userId", verifyToken, getBookingsByUser);
router.get("/:bookingId", verifyToken, getBooking);
router.put("/update/:bookingId", verifyToken, updateBooking);
router.delete("/delete/:bookingId", verifyToken, deleteBooking);

module.exports = router;
