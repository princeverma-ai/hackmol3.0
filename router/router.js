const express = require("express");
const userController = require("../controllers/userContoller");

const Router = express.Router();

Router.route("/signup").post(userController.signUp);
Router.route("/login").post(userController.login);

// Router.route("/:id/").post(userController.getUser);

module.exports = Router;
