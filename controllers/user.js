const users = require("../models/usersS");
const players = require("../models/players");
//const player = await players.find({firstname:ali})
async function createUser(req, res) {

  const player = await players.findOne({   playerFirstName: req.body.player });
  const test = await users.find({ userName: "test" }).populate("Players");
 
  // console.log(player + "herl")
  const create = await users.create({
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email, //"a@gog.com"
    password: req.body.password,
    Players: player,
  });
  await create.save();
  res.send(`Successfully Adding User!`);
}

async function getUsers(req, res) {
  const gUser = req.params.userName;
  const findUser = await users.find({ userName: gUser });
  res.send(findUser);
}

async function updUsers(req, res) {
  const upd = req.params.id;
  try {
    const update = await users.findByIdAndUpdate(upd, {
      userName: req.body.userName,
    });
    update.save();
    res.send("Data update successfully");
  } catch (err) {
    console.log(`There is an error ${err}`);
  }
}

async function delUser(req, res) {
  const id = req.params.id;
  await users.findByIdAndDelete(id, (err) => {
    console.log(`There is an error ${err}`);
  });
  res.send("Data delete successfully");
}

module.exports = {
  createUser,
  getUsers,
  updUsers,
  delUser,
};
