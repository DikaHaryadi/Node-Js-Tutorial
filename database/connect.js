const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Epsilon:%40Dikahry123@nodeexpressprojects.fqn0h45.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connectDB = (url) => {
  mongoose
    .connect(connectionString)
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB