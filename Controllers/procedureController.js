const procedureService = require("../Services/procedureService");
const asyncHandler = require("express-async-handler");

// create procedure

const createProcedure = asyncHandler(async (req, res) => {
  const { name, category, date, image, price } = req.body;
  try {
    const procedure = await procedureService.createProcedure(
      name,
      category,
      date,
      image,
      price,
    );
    res.status(201).json(procedure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get procedure

const getProcedure = asyncHandler(async (req, res) => {
  const { procedureId } = req.params;
  try {
    const procedure = await procedureService.getProcedure(procedureId);
    res.status(200).json(procedure);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get procedures

const getProcedures = asyncHandler(async (req, res) => {
  try {
    const procedures = await procedureService.getProcedures();
    res.status(200).json(procedures);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update procedure

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

// delete procedure

const deleteProcedure = asyncHandler(async (req, res) => {
  const { procedureId } = req.params;
  try {
    const procedure = await procedureService.deleteProcedure(procedureId);
    res.status(200).json(procedure);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  createProcedure,
  getProcedure,
  getProcedures,
  updateProcedure,
  deleteProcedure,
};
