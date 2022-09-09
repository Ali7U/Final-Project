const express = require("express");
const routerAdmin = express.Router();
const rAdmin = require("../controllers/adminController");

routerAdmin.post("/academy/admin/add", rAdmin.setAdmin);

routerAdmin.get("/academy/admin/:adName", rAdmin.getAdmin);

routerAdmin.put("/academy/admin/update/:upd", rAdmin.updateAdmin);

routerAdmin.delete("/academy/admin/remove/:id", rAdmin.removeAdmin);

module.exports = routerAdmin;
