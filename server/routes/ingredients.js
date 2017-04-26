var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var IngredientsSchema = mongoose.Schema({
  "Category": String,
  "Ingredient": String
}); // end IngredientsSchema

var Ingredients = mongoose.model("Ingredients", IngredientsSchema);
