const express = require("express");
const bodyParser = require("body-parser");
const Router = require("./router/router");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

app.use("/", Router);

app.use(express.static(`${__dirname}/public`))

module.exports = app;
