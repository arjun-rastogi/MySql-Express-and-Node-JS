const express = require("express");

const connection = require("./connection");

const productRoute = require('./routes/product');

const app = express();

app.use(express.urlencoded({extended:  true}));
app.use(express.json());

// Routing for our product file.
app.use('/product', productRoute);

module.exports = app;