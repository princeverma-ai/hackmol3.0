const express = require("express");
const userController=require('../controllers/userContoller');

const Router = express.Router();

Router.route("/signUp").post(userController.signIn);
Router.route("/login").post(userController.login).get(userController.login);
