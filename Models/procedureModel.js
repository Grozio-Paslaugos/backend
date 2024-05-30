const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add procedure name"],
    },
    description: {
      type: String,
      required: [true, "Please add procedure description"],
    },
    duration: {
      type: Number,
      required: [true, "Please add procedure duration (in minutes)"],
    },
    price: {
      type: Number,
      required: [true, "Please add procedure price (in euros)"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Procedure", procedureSchema);
