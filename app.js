"use strict"

const express = require('express');

const app = express();

const {items, Item } = require('./fakeDb');

app.use(express.json());

/** Respond to get request for items with JSON for all items. */
app.get('/items', function(req, res) {

  return res.json({ items });
})

app.post('/items', function(req, res) {
  const name = req.body.name;
  const price = req.body.price;

  const item = Item.createItem(name, price);

  return res.json({
    added: item
  });

  //method for delete
})

module.exports = app;