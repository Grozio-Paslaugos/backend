// server
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./Config/db");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api routes

app.use("/api/users", require("./Routes/userRoutes"));
app.use("/api/bookings", require("./Routes/bookingRoutes"));
app.use("/api/procedures", require("./Routes/procedureRoutes"));
app.use("/api/categories", require("./Routes/procedureRoutes"));
app.use("/api/ratings", require("./Routes/ratingRoutes"));
app.use("/api/notifications", require("./Routes/notificationRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
