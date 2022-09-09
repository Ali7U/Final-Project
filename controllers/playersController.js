const { models } = require("mongoose");
const Player = require("../models/players");

async function createPlayer(req, res) {
  console.log(req.body.name);
  const player = new Player({
    playerFirstName: req.body.playerFirstName,
    playerLastName: req.body.playerLastName,
    age: req.body.age,
    position: req.body.position,
    birthDate: req.body.birthDate,
  });
  player.save();
  res.send("Success");
}

async function getPlayer(req, res) {
  const player = req.params.playerName;
  const findPlayer = await Player.find({ playerFirstName: player });
  res.send(findPlayer);
}

async function putPlayer(req, res) {
  const player = req.params.change;
  console.log(player);
  try {
    await Player.findOneAndUpdate(
      { playerFirstName: player },
      { position: req.body.position },
      {
        new: true,
      }
    );
  } catch (err) {
    console.log(`There is an error ${err}`);
    res.send(err);
  }

  res.send("Sucess");

  // putPlayer.save();
}

async function deletePlayer(req, res) {
  const id = req.params.id;
  Player.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(`There is an error ${err}`);
    } else {
      res.send("Success delete");
    }
  });
}

module.exports = {
  createPlayer,
  getPlayer,
  putPlayer,
  deletePlayer,
};
