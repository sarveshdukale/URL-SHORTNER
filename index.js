const express = require("express");
const app = express();
const DBConnect = require("./config/db")
const PORT = 3000;
const path = require("path");
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const urlRoute = require("./routes/url.route");
const authRoute = require("./routes/auth.route");

app.use("/api/url", urlRoute);

app.use("/api/user", authRoute);

DBConnect();
app.listen(PORT,()=> console.log(`Server running on ${PORT}`))