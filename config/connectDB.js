const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://phaucau2311:0168470209haumon@chat-app.srjik2y.mongodb.net/?retryWrites=true&w=majority&appName=chat-app`
    );
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connect to DB");
    });
    connection.on("error", (error) => {
      console.log("Something is wrong in mongodb", error);
    });
  } catch (error) {
    console.log("Something is wrong", error);
  }
}

module.exports = connectDB;
