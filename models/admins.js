const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const admin = new Schema({
  adminName: String,
  age: Number,
  numberOfCoach: Number,
  job: String,
});

module.exports = mongoose.model("admin", admin);
