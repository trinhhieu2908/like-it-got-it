const express = require("express");
const fs = require('fs')
var multer = require('multer')
const home = require('./controller/home');
const app = express()
//var upload = multer()

//const appBundle = fs.readFileSync("./frontend/build/index.html", "utf8");

//app.use('/', express.static("frontend/build"));
app.use(express.json());

// app.get('/', function(req, res) {
//     res.send(appBundle)
// })
app.get('/home', home.getHome)

module.exports = app