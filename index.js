const express = require("express");
const app = express();
const DBConnect = require("./config/db")
const PORT = 3000;
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

const urlRoute = require("./routes/url.route");

app.use("/api/url", urlRoute);

DBConnect();
app.listen(PORT,()=> console.log(`Server running on ${PORT}`))