/** @format */

const procedureService = require("../Services/procedureService");
const bookingService = require("../Services/bookingService");
const asyncHandler = require("express-async-handler");
const Procedure = require("../Models/procedureModel");
const User = require("../Models/userModel");

// Create procedure
const createProcedure = asyncHandler(async (req, res) => {
  const { name, category, date, image } = req.body;
  try {
    const procedure = await procedureService.createProcedure(
      name,
      category,
      date,
      image
    );
    res.status(201).json(procedure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get procedure
const getProcedure = asyncHandler(async (req, res) => {
  const { procedureId } = req.params;
  try {
    const procedure = await procedureService.getProcedure(procedureId);
    res.status(200).json(procedure);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get procedures
const getProcedures = asyncHandler(async (req, res) => {
  try {
    const procedures = await procedureService.getProcedures();
    res.status(200).json(procedures);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update procedure
const updateProcedure = asyncHandler(async (req, res) => {
  const { procedureId } = req.params;
  const updateData = req.body;
  try {
    const procedure = await procedureService.updateProcedure(
      procedureId,
      updateData
    );
    res.status(200).json(procedure);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Delete procedure
const deleteProcedure = asyncHandler(async (req, res) => {
  const { procedureId } = req.params;
  try {
    const procedure = await procedureService.deleteProcedure(procedureId);
    res.status(200).json(procedure);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Register user to procedure
const registerUserToProcedure = asyncHandler(async (req, res) => {
  const { userId, procedureId, bookingDatetime } = req.body;
  try {
    const procedure = await Procedure.findById(procedureId);
    const user = await User.findById(userId);

    if (!procedure) {
      return res.status(404).json({ message: "Procedure not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a booking
    const booking = await bookingService.createBooking(
      userId,
      procedureId,
      bookingDatetime
    );

    res
      .status(200)
      .json({ message: "User registered to procedure successfully", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get registered procedures
const getRegisteredProcedures = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const bookings = await bookingService.getBookingsByUser(userId);

    if (!bookings) {
      return res
        .status(404)
        .json({ message: "Bookings not found for this user" });
    }

    res.status(200).json({ registeredProcedures: bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  createProcedure,
  getProcedure,
  getProcedures,
  updateProcedure,
  deleteProcedure,
  registerUserToProcedure,
  getRegisteredProcedures,
};
