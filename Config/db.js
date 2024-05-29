const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectingToDB = async () => {
  try {
    const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`Connected to ${connecting.connection.host}`);
  } catch (error) {
    console.log(`Error connecting ${error}`);
  }
};

module.exports = connectingToDB;
