const express = require("express");
require('dotenv').config()
const fs = require('fs')
var multer = require('multer')
const home = require('./controller/home');
const product = require('./controller/product');
const app = express()
//var upload = multer()

// const appBundle = fs.readFileSync("../frontend/public/index.html", "utf8");

// app.use('/', express.static("frontend/public"));
app.use(express.json());

// app.get('/', function(req, res) {
//     res.send(appBundle)
// })
app.get('/home', home.getHome)
app.post('/api/product', product.addProduct)
app.get('/api/product', product.listAllProducts)
app.patch('/api/product/:id', product.updateProduct)
module.exports = app