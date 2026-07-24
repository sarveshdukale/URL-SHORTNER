const mongoose = require("mongoose");

function DBConnect() {
  mongoose.connect("mongodb://localhost:27017/nodeSeries").then
  console.log("DB connected successfully...");
}

module.exports = DBConnect;
