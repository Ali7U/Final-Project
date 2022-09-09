const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const user = new Schema({
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  //shdfsj
  password: {
    type: String,
    require: [true, "Please Enter an Password"],
    minlength: [6, "Minimmum password most have 6 characters"],
  },
  //const obj = {}
  Players: {
    type: Schema.Types.ObjectId,
    ref: "players",
  },
});

// hash password
user.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("user", user);
