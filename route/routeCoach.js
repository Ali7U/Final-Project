const express = require("express");
const routerCoach = express.Router();
const rCoach = require("../controllers/coachContollers");

/* _______________________________________Express__________________________________________________*/
routerCoach.post("/academy/addManager", rCoach.setCoach); // post

routerCoach.get("/academy/show/:mang", rCoach.getCoach);

routerCoach.put("/academy/update/:change", rCoach.changeManager);

routerCoach.delete("/academy/removeCoach/:_id", rCoach.rem);

module.exports = routerCoach;
