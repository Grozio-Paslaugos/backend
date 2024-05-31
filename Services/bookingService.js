const Booking = require("../Models/bookingModel");

class BookingService {
  /**
   * Creates a new booking.
   *
   * @param {string} userId - The ID of the user making the booking.
   * @param {string} procedureId - The ID of the procedure being booked.
   * @param {Date} bookingDatetime - The date and time of the booking.
   * @returns {Object} - The created booking object.
   * @throws {Error} - Throws an error if any required field is missing.
   */

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

  /**
   * Retrieves a booking by its ID.
   *
   * @param {string} bookingId - The ID of the booking.
   * @returns {Object} - The booking object.
   * @throws {Error} - Throws an error if the booking is not found.
   */

  async getBooking(bookingId) {
    const booking = await Booking.findById(bookingId)
      .populate("user_id")
      .populate("procedure_id");
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  }

  /**
   * Retrieves all bookings.
   *
   * @returns {Array} - An array of booking objects.
   */

  async getBookings() {
    const bookings = await Booking.find({})
      .populate("user_id")
      .populate("procedure_id");
    return bookings;
  }

  /**
   * Retrieves bookings by user ID.
   *
   * @param {string} userId - The ID of the user.
   * @returns {Array} - An array of booking objects
   */

  async getBookingsByUser(userId) {
    const bookings = await Booking.find({ user_id: userId })
      .populate("user_id")
      .populate("procedure_id");
    return bookings;
  }

  /**
   * Updates a booking by its ID.
   *
   * @param {string} bookingId - The ID of the booking.
   * @param {Object} updateData - The data to update the booking with.
   * @returns {Object} - The updated booking object.
   * @throws {Error} - Throws an error if the booking is not found.
   */

  async updateBooking(bookingId, updateData) {
    const booking = await Booking.findByIdAndUpdate(bookingId, updateData, {
      new: true,
    });
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  }

  /**
   * Deletes a booking by its ID.
   *
   * @param {string} bookingId - The ID of the booking.
   * @returns {Object} - The deleted booking object.
   * @throws {Error} - Throws an error if the booking is not found.
   */

  async deleteBooking(bookingId) {
    const booking = await Booking.findByIdAndDelete(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  }
}

module.exports = new BookingService();
