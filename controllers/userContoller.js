const User = require("./../models/userModel");
const Budget = require("./../models/budgetModel");

//---------------------------------------------------------------------------
exports.signUp = async function (req, res) {
  try {
    console.log(req.body);

    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
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
exports.login = async function (req, res) {
  try {
    console.log(req.body);
    const user = await User.find(req.body);
    if (user[0]) {
      res.status(200).json({
        status: "succesful login",
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

//---------------------------------------------------------------------------
