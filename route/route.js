const express = require("express");
const router = express.Router();
const pl = require("../controllers/playersController");

/* _______________________________________Player__________________________________________________*/ 
router.post("/academy/add/", pl.createPlayer);

router.get("/academy/find/:playerName", pl.getPlayer);
router.put("/academy/updat/:change", pl.putPlayer);
router.delete("/academy/remove/:id", pl.deletePlayer);

module.exports = router;
