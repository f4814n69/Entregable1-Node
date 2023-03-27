const express = require("express");

const usersControllers = require("../controllers/users.controllers");

const routerUsers = express.Router();

routerUsers
  .route("/")
  .get(usersControllers.findAll)
  .post(usersControllers.createUser);

routerUsers
  .route("/:id")
  .get(usersControllers.userById)
  .patch(usersControllers.userUpdate)
  .delete(usersControllers.deleteUser);

module.exports = routerUsers;
