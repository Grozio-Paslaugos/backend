const express = require("express");
const router = express.Router();
const {
  createProcedure,
  getProcedure,
  getProcedures,
  updateProcedure,
  deleteProcedure,
  registerUserToProcedure,
  getRegisteredProcedures,
} = require("../Controllers/procedureController");
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// Procedure routes
router.post("/create", verifyToken, checkAdminRole, createProcedure);
router.get("/", verifyToken, getProcedures); // Remove admin role check for fetching procedures
router.get("/:procedureId", verifyToken, getProcedure);
router.put(
  "/update/:procedureId",
  verifyToken,
  checkAdminRole,
  updateProcedure
);
router.delete(
  "/delete/:procedureId",
  verifyToken,
  checkAdminRole,
  deleteProcedure
);
router.post("/register", verifyToken, registerUserToProcedure); // Register user to procedure
router.get("/registered/:userId", verifyToken, getRegisteredProcedures); // Get registered procedures

module.exports = router;
