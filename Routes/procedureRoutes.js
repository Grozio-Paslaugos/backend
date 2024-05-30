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

router.post("/create", verifyToken, checkAdminRole, createProcedure);
router.get("/", verifyToken, checkAdminRole, getProcedures);
router.get("/:procedureId", verifyToken, checkAdminRole, getProcedure);
router.put(
  "/update/:procedureId",
  verifyToken,
  checkAdminRole,
  updateProcedure,
);
router.delete(
  "/delete/:procedureId",
  verifyToken,
  checkAdminRole,
  deleteProcedure,
);

module.exports = router;
