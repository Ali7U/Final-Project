const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coach = new Schema({
  cName: String,
  jobTitle: String,
  cAge: Number,

  
});

module.exports = mongoose.model("coach", coach);
