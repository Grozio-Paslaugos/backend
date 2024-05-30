const Procedure = require("../Models/procedureModel");

class ProcedureService {
  /**
   * Creates a new procedure.
   *
   * @param {string} name - The name of the procedure.
   * @param {string} description - The description of the procedure.
   * @param {number} duration - The duration of the procedure in minutes.
   * @param {number} price - The price of the procedure in euros.
   * @returns {Object} - The created procedure object.
   * @throws {Error} - Throws an error if any required field is missing.
   */

  async createProcedure(name, description, duration, price) {
    if (!name || !description || !duration || !price) {
      throw new Error("Please fill all fields");
    }

    const procedure = await Procedure.create({
      name,
      description,
      duration,
      price,
    });

    return procedure;
  }

  /**
   * Retrieves a procedure by its ID.
   *
   * @param {string} procedureId - The ID of the procedure.
   * @returns {Object} - The procedure object.
   * @throws {Error} - Throws an error if the procedure is not found.
   */

  async getProcedure(procedureId) {
    const procedure = await Procedure.findById(procedureId);
    if (!procedure) {
      throw new Error("Procedure not found");
    }
    return procedure;
  }

  /**
   * Retrieves all procedures.
   *
   * @returns {Array} - An array of procedure objects.
   */

  async getProcedure() {
    const procedures = await Procedure.find({});
    return procedures;
  }

  /**
   * Updates a procedure by its ID.
   *
   * @param {string} procedureId - The ID of the procedure.
   * @param {Object} updateData - The data to update the procedure with.
   * @returns {Object} - The updated procedure object.
   * @throws {Error} - Throws an error if the procedure is not found.
   */

  async updateProcedure(procedureId, updateData) {
    const procedure = await Procedure.findByIdAndUpdate(
      procedureId,
      updateData,
      { new: true },
    );
    if (!procedure) {
      throw new Error("Procedure not found");
    }
    return procedure;
  }

  /**
   * Deletes a procedure by its ID.
   *
   * @param {string} procedureId - The ID of the procedure.
   * @returns {Object} - The deleted procedure object.
   * @throws {Error} - Throws an error if the procedure is not found.
   */

  async deleteProcedure(procedureId) {
    const procedure = await Procedure.findByIdAndDelete(procedureId);
    if (!procedure) {
      throw new Error("Procedure not found");
    }
    return procedure;
  }
}

module.exports = new ProcedureService();
