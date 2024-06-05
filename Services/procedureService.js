/** @format */

const Procedure = require("../Models/procedureModel");

const createProcedure = async (name, category, date, image) => {
  const procedure = new Procedure({ name, category, date, image });
  await procedure.save();
  return procedure;
};

const getProcedure = async (procedureId) => {
  return await Procedure.findById(procedureId);
};

const getProcedures = async () => {
  return await Procedure.find({});
};

const updateProcedure = async (procedureId, updateData) => {
  return await Procedure.findByIdAndUpdate(procedureId, updateData, {
    new: true,
  });
};

const deleteProcedure = async (procedureId) => {
  return await Procedure.findByIdAndDelete(procedureId);
};

module.exports = {
  createProcedure,
  getProcedure,
  getProcedures,
  updateProcedure,
  deleteProcedure,
};
