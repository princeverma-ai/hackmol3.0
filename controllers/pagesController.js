const fs = require("fs");

//---------------------------------------------------------------------------
exports.getDashboard = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(
      `${__dirname}/../views/dashboard.html`,
      "utf-8",
      (err, data) => {
        res.status(200).send(data);
        if (err) {
          throw new Error("Cannot get Page");
        }
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
exports.getProfile = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(`${__dirname}/../views/profile.html`, "utf-8", (err, data) => {
      res.status(200).send(data);
      if (err) {
        throw new Error("Cannot get Page");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};
//---------------------------------------------------------------------------
exports.getIncome = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(`${__dirname}/../views/income.html`, "utf-8", (err, data) => {
      res.status(200).send(data);
      if (err) {
        throw new Error("Cannot get Page");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};
//---------------------------------------------------------------------------
exports.getExpense = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(`${__dirname}/../views/expenses.html`, "utf-8", (err, data) => {
      res.status(200).send(data);
      if (err) {
        throw new Error("Cannot get Page");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};
//---------------------------------------------------------------------------
exports.getGoals = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(`${__dirname}/../views/goals.html`, "utf-8", (err, data) => {
      res.status(200).send(data);
      if (err) {
        throw new Error("Cannot get Page");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};
//---------------------------------------------------------------------------
exports.getAnalytics = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(
      `${__dirname}/../views/analytics.html`,
      "utf-8",
      (err, data) => {
        res.status(200).send(data);
        if (err) {
          throw new Error("Cannot get Page");
        }
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
exports.logout = async function (req, res) {
  try {
    console.log(req.body);

    fs.readFile(`${__dirname}/../public/index.html`, "utf-8", (err, data) => {
      res.status(200).send(data);
      if (err) {
        throw new Error("Cannot get Page");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 💣💣" + error);
  }
};
