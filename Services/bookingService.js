/** @format */

const Booking = require("../Models/bookingModel");

class BookingService {
  async createBooking(userId, procedureId, bookingDatetime) {
    if (!userId || !procedureId || !bookingDatetime) {
      throw new Error("Please fill all fields");
    }

    const booking = await Booking.create({
      user_id: userId,
      procedure_id: procedureId,
      booking_datetime: bookingDatetime,
      status: "pending",
    });

    return booking;
  }

  // Retrieves a booking by its ID.
  async getBooking(bookingId) {
    const booking = await Booking.findById(bookingId)
      .populate("user_id")
      .populate("procedure_id");
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  }

  // Retrieves all bookings.
  async getBookings() {
    const bookings = await Booking.find({})
      .populate("user_id")
      .populate("procedure_id");
    return bookings;
  }

  // Retrieves bookings by user ID.
  async getBookingsByUser(userId) {
    const bookings = await Booking.find({ user_id: userId })
      .populate("user_id")
      .populate("procedure_id");
    return bookings;
  }

  // Updates a booking by its ID.
  async updateBooking(bookingId, updateData) {
    const booking = await Booking.findByIdAndUpdate(bookingId, updateData, {
      new: true,
    });
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  }

  // Deletes a booking by its ID.
  async deleteBooking(bookingId) {
    const booking = await Booking.findByIdAndDelete(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  }
}

module.exports = new BookingService();
