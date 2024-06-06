/** @format */

const Procedure = require("../Models/procedureModel");

/**
 * Retrieves all procedures.
 *
 * @returns {Array} - An array of procedure objects.
 */
const getProcedures = async () => {
  return await Procedure.find({});
};

/**
 * Updates a procedure by its ID.
 *
 * @param {string} procedureId - The ID of the procedure.
 * @param {Object} updateData - The data to update the procedure with.
 * @returns {Object} - The updated procedure object.
 * @throws {Error} - Throws an error if the procedure is not found.
 */
const updateProcedure = async (procedureId, updateData) => {
  const procedure = await Procedure.findByIdAndUpdate(procedureId, updateData, {
    new: true,
  });
  if (!procedure) {
    throw new Error("Procedure not found");
  }
  return procedure;
};

/**
 * Deletes a procedure by its ID.
 *
 * @param {string} procedureId - The ID of the procedure.
 * @returns {Object} - The deleted procedure object.
 * @throws {Error} - Throws an error if the procedure is not found.
 */
const deleteProcedure = async (procedureId) => {
  const procedure = await Procedure.findByIdAndDelete(procedureId);
  if (!procedure) {
    throw new Error("Procedure not found");
  }
  return procedure;
};

const getAllCategories = async () => {
  const categories = await Procedure.distinct("category");
  if (!categories) {
    throw new Error("No categories found");
  }
  return categories;
};

const createProcedure = async (name, category, date, image) => {
  const procedure = new Procedure({ name, category, date, image });
  await procedure.save();
  return procedure;
};

const getProcedure = async (procedureId) => {
  return await Procedure.findById(procedureId);
};

module.exports = {
  createProcedure,
  getProcedure,
  getProcedures,
  updateProcedure,
  deleteProcedure,
  getAllCategories,
};
