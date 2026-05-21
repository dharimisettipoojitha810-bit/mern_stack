const mongoose = require("mongoose");
const connection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DataBase Connected Successfully");
    })
    .catch((err) => {
      console.log("failed to connect DB:", err);
    });
};

module.exports = connection;