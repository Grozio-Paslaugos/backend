const ratingService = require("../Services/ratingService");
const asyncHandler = require("express-async-handler");

// create rating

const createRating = asyncHandler(async (req, res) => {
  const { userId, procedureId, rating, comment } = req.body;
  try {
    const newRating = await ratingService.createRating(
      userId,
      procedureId,
      rating,
      comment,
    );
    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get rating

const getRating = asyncHandler(async (req, res) => {
  const { ratingId } = req.params;
  try {
    const rating = await ratingService.getRating(ratingId);
    res.status(200).json(rating);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get ratings

const getRatings = asyncHandler(async (req, res) => {
  try {
    const ratings = await ratingService.getRatings();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update rating

const updateRating = asyncHandler(async (req, res) => {
  const { ratingId } = req.params;
  const updateData = req.body;
  try {
    const rating = await ratingService.updateRating(ratingId, updateData);
    res.status(200).json(rating);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// delete rating

const deleteRating = asyncHandler(async (req, res) => {
  const { ratingId } = req.params;
  try {
    const rating = await ratingService.deleteRating(ratingId);
    res.status(200).json(rating);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  createRating,
  getRating,
  getRatings,
  updateRating,
  deleteRating,
};
