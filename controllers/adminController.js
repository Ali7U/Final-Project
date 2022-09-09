// const admin = require("mongoose");
const admin = require("../models/admins");
const coach = require("../models/coach");

async function setAdmin(req, res) {
  const theAdmin = await admin.create({
    adminName: req.body.adminName,
    age: req.body.age,
    numberOfCoach: req.body.numberOfCoach,
    job: req.body.job,
  });
  theAdmin.save();
  res.send("Admin is Here");
}

async function getAdmin(req, res) {
  const getAd = req.params.adName;
  const ad = await admin.find({ adminName: getAd });
  res.send(ad);
}

async function updateAdmin(req, res) {
  const upd = req.params.upd;
  await admin.findByIdAndUpdate(upd, { numberOfCoach: req.body.numberOfCoach });
  res.send("Update is Succesfully");
}

async function removeAdmin(req, res) {
  const id = req.params.id;
  await admin.findByIdAndDelete(id);
  res.send("Successful");
}

module.exports = {
  setAdmin,
  getAdmin,
  updateAdmin,
  removeAdmin,
};
