// Base Modules

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// Database Modules
var db = require("./modules/db.js");

// Route Modules
var index = require("./routes/index.js");
var recipe = require("./routes/recipe.js");

// App Config
app.set("port", (process.env.PORT || 5000));

// Middleware Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("server/public"));

// Routes
app.use("/", index);
app.use("/recipe/", recipe);

// Listen
app.listen(app.get("port"), function(){
  console.log("Listening on port", app.get("port"));
});

module.exports = app;
