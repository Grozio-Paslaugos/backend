require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./Config/db");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
