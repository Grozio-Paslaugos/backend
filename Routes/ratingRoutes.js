// server

const express = require("express");
const router = express.Router();

// Rating functions

const {
  createRating,
  getRating,
  getRatings,
  updateRating,
  deleteRating,
} = require("../Controllers/ratingController");

// middleware functions

const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// Rating routes
// http://localhost:5000/api/ratings/<...>
// Requires Bearer Token
/*
 *     "userId": "6658fc1e013eed7c95000d98",
 *     "procedureId": "6659008e9fd7dabce715bfad",
 *     "rating": "5",
 *     "comment": "puiki meistryte"
 */

router.post("/create", verifyToken, createRating);
router.get("/", verifyToken, getRatings);
router.get("/:ratingId", verifyToken, getRating);
router.put("/update/:ratingId", verifyToken, updateRating);
router.delete("/delete/:ratingId", verifyToken, deleteRating);

module.exports = router;
