const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const players = new Schema({
  playerFirstName: String,
  playerLastName: String,
  age: Number,
  position: String,
  birthDate: String,
});

// MVC
module.exports = mongoose.model("Player", players);
