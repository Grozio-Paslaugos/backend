/** @format */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./Config/db");

// Initialize express app
const app = express();

// Connect to the database
connectToDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use("/api/users", require("./Routes/userRoutes"));
app.use("/api/bookings", require("./Routes/bookingRoutes"));
app.use("/api/procedures", require("./Routes/procedureRoutes"));
app.use("/api/ratings", require("./Routes/ratingRoutes"));
app.use("/api/notifications", require("./Routes/notificationRoutes"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
