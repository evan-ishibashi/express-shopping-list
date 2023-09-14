"use strict"

const express = require('express');
const itemRoutes = require('./item-routes')

const app = express();

app.use(express.json());

app.use("/items", itemRoutes)


module.exports = app;