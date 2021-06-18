const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Recipes = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    linkfoto: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dish", Dish);
