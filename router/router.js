const express = require("express");
const userController = require("../controllers/userContoller");
const pagesController = require("../controllers/pagesController");

const Router = express.Router();

Router.route("/signup").post(userController.signUp);
Router.route("/login").post(userController.login);

Router.route("/getUser").post(userController.getUser);

Router.route("/dashboard").get(pagesController.getDashboard);
Router.route("/profile").get(pagesController.getProfile);
Router.route("/income").get(pagesController.getIncome);
Router.route("/expense").get(pagesController.getExpense);
Router.route("/goals").get(pagesController.getGoals);
Router.route("/analytics").get(pagesController.getAnalytics);
Router.route("/logout").get(pagesController.logout);

// Router.route("/:id/").post(userController.getUser);

module.exports = Router;
