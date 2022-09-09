const express = require("express");
const routerUser = express.Router();
const rUser = require("../controllers/user");
const usersS = require("../models/usersS");

routerUser.post("/academy/users/create", rUser.createUser);

routerUser.get("/academy/users/find/:userName", rUser.getUsers);

routerUser.put("/academy/users/update/:id", rUser.updUsers);

routerUser.delete("/academy/users/remove/:id", rUser.delUser);

routerUser.get("/academy/login/", (req, res) => {
  const log0n = req.params.login;
  const newLogin = new usersS({
    userName: req.body.log0n,
  });
});

module.exports = routerUser;
