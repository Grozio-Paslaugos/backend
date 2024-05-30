const bookingService = require("../Services/bookingService");
const asyncHandler = require("express-async-handler");

// create booking

const createBooking = asyncHandler(async (req, res) => {
  const { userId, procedureId, bookingDatetime } = req.body;
  try {
    const booking = await bookingService.createBooking(
      userId,
      procedureId,
      bookingDatetime,
    );
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get booking

const getBooking = asyncHandler(async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await bookingService.getBooking(bookingId);
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get bookings

const getBookings = asyncHandler(async (req, res) => {
  try {
    const bookings = await bookingService.getBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update booking

const updateBooking = asyncHandler(async (req, res) => {
  const { bookingId } = req.params;
  const updateData = req.body;
  try {
    const booking = await bookingService.updateBooking(bookingId, updateData);
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// delete booking

const deleteBooking = asyncHandler(async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await bookingService.deleteBooking(bookingId);
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  createBooking,
  getBooking,
  getBookings,
  updateBooking,
  deleteBooking,
};
