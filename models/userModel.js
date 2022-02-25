const mongoose = require("mongoose");

//USER SCHEMA-------------------------------------------------
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name is required"],
      trim: true,
    },
    email: {
        type: String,
        required: [true, "You does not have Email ?"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        select:false
      },
      accountCreationTime: {
        type: Date,
        default: Date.now(),
        select: false,
      },
     
      lastLogin: {
        type: Date,
        default: new Date(),
      },
    
  },
  {
    toJSON: { virtuals: true },
    toOject: { vituals: true },
  }
);

//User Model---------------------------------------------------------------
const User = mongoose.model("Users", userSchema);

module.exports = User;
