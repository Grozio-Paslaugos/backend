const Rating = require("../Models/ratingModel");

class RatingService {
  async createRating(userId, procedureId, rating, comment) {
    if (!userId || !procedureId || !rating || !comment) {
      throw new Error("Please fill all required fields");
    }

    const newRating = await Rating.create({
      user_id: userId,
      procedure_id: procedureId,
      rating,
      comment,
    });

    return newRating;
  }

  async getRating(ratingId) {
    const rating = await Rating.findById(ratingId)
      .populate("user_id")
      .populate("procedure_id");
    if (!rating) {
      throw new Error("Rating not found");
    }
    return rating;
  }

  async getRatings() {
    const ratings = await Rating.find({})
      .populate("user_id")
      .populate("procedure_id");
    return ratings;
  }

  async updateRating(ratingId, updateData) {
    const rating = await Rating.findByIdAndUpdate(ratingId, updateData, {
      new: true,
    });
    if (!rating) {
      throw new Error("Rating not found");
    }
    return rating;
  }

  async deleteRating(ratingId) {
    const rating = await Rating.findByIdAndDelete(ratingId);
    if (!rating) {
      throw new Error("Rating not found");
    }
    return rating;
  }
}

module.exports = new RatingService();
