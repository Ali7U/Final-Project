const express = require("express");
app = express();
const fs = require("fs");
const mongoose = require("mongoose");
// const playersController = require('./controllers/playersController');
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/test ");


// app.get("/", playersController.creste =>{});
// route Players
const pl = require("./route/route");
// route Coach
const rCoach = require("./route/routeCoach");
// route admin
const rAdmin = require("./route/routeAdmin");

// route user
const rUser = require("./route/routeUser");

// Use method
app.use("/", pl);
app.use("/", rCoach);
app.use("/", rAdmin);
app.use('/', rUser)

// Port
app.listen(3000, () => console.log(`Server is up on PORT: 3000`));
