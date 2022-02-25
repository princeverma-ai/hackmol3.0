const mongoose = require("mongoose");

//USER SCHEMA-------------------------------------------------
const budgetSchema = new mongoose.Schema(
  {
    incomeSources: {
      type: [Array],
    },
    expenses: {
      type: [Array],
    },
  },
  {
    toJSON: { virtuals: true },
    toOject: { vituals: true },
  }
);

//User Model---------------------------------------------------------------
const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
