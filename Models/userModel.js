/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Please add email"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: String,
      required: [true, "Please add phone number"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^\+370\d{8}$/.test(v); // Lithuanian phone number
        },
        message: (props) => `${props.value} is not a valid phone number`,
      },
    },
    registeredProcedures: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Procedure" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
