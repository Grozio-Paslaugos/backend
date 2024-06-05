const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    procedure_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Procedure",
      required: true,
    },
    averageRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    totalRating: {
      type: Number,
      required: false,
      min: 0
    },
    comment: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Rating", ratingSchema);
