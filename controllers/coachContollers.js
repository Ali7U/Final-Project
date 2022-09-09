const { models } = require("mongoose");
// const coach = require("../models/coach");
const coach = require("../models/coach");

// post method
async function setCoach(req, res) {
  const theCoachs = await coach.create({
    cName: req.body.cName,
    jobTitle: req.body.jobTitle,
    cAge: req.body.cAge,
  });
  await theCoachs.save();
  res.send("Successfully adding the couch");
}

// get method
async function getCoach(req, res) {
  const gCoach = req.params.mang;
  const ch = await coach.find({ cName: gCoach });
  res.send(ch);
}

async function changeManager(req, res) {
  const change = req.params.name;
  try {
    const putCoach = await coach.findOneAndUpdate(
      { cName: change },
      { jobTitle: req.body.jobTitle },
      { new: true }
    );
  } catch (err) {
    console.log(`There is an error ${err}`);
  }
}

async function rem(req, res){
  const id = req.params._id;
  coach.findByIdAndDelete(id, (err)=>{
    if(err){
      console.log(`There is an error ${err}`);
    } else {
      res.send('Successfully Deleting')
    }
  })
}

// async function(req)

module.exports = {
  setCoach,
  getCoach,
  changeManager,
  rem,
};
