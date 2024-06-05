const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add procedure name"],
    },
    category: {
      type: String,
      required: [true, "Please add procedure category"],
    },
    price: {
      type: Number,
      required: [true, "Please add procedure price"],
    },
    date: {
      type: String,
      required: [true, "Please add procedure date"],
    },
    image: {
      type: String,
      required: [true, "Please add procedure image url"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Procedure", procedureSchema);
