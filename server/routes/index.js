var express = require("express");
var router = express.Router();
var path = require("path");

// Base router
router.get("/", function(req, res){
  res.sendFile(path.resolve("server/public/views/index.html"));
});

module.exports = router;
