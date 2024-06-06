// server

const express = require("express");
const router = express.Router();

// Procedure functions

const {
  createProcedure,
  getProcedure,
  getProcedures,
  updateProcedure,
  deleteProcedure,
  getAllCategories,
} = require("../Controllers/procedureController");

// middleware functions

const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// Procedure routes
// http://localhost:5000/api/procedures/<...>
// Requires Bearer Token
/*
 *     "name": "manikiuras",
 *     "description": "graziai padarysime",
 *     "duration": "90"
 *     "price": "30"
 */

router.post("/create", verifyToken, createProcedure);
router.get("/", getProcedures);
router.get("/all", getAllCategories);
router.get("/:procedureId", getProcedure);
router.put("/update/:procedureId", verifyToken, updateProcedure);
router.delete("/delete/:procedureId", verifyToken, deleteProcedure);

module.exports = router;
