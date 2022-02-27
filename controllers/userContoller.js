const User = require("../models/userModel");
const fs = require("fs");
//---------------------------------------------------------------------------
exports.signUp = async function (req, res) {
  try {
    console.log(req.body);

    const newUser = await User.create(req.body);
    fs.readFile(
      `${__dirname}/../views/dashboard.html`,
      "utf-8",
      (err, data) => {
        res.status(200).send(data);
      }
    );
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};

//---------------------------------------------------------------------------
exports.login = async function (req, res) {
  try {
    console.log(req.body);
    const user = await User.find(req.body);
    if (user[0]) {
      fs.readFile(`${__dirname}/../views/main.html`, "utf-8", (err, data) => {
        res.status(200).send(data);
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};

//---------------------------------------------------------------------------
exports.getUser = async function (req, res) {
  try {
    console.log(req.body);
    const user = await User.find(req.body);
    if (user[0]) {
      res.status(200).json({
        status: "success",
        user: user[0],
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};
