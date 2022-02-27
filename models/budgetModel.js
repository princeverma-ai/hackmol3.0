const mongoose = require("mongoose");

//USER SCHEMA-------------------------------------------------
const budgetSchema = new mongoose.Schema(
  {
    name: String,
    incomeSources: {
      type: [Object],
    },
    expenses: {
      type: [Object],
    },
    savingsTarget: Array,
    goals: {
      type: Array,
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
