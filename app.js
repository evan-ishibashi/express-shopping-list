"use strict"

const express = require('express');

const app = express();

const {items, Item } = require('./fakeDb');

app.use(express.json());

/** Respond to get request for items with JSON for all items. */
app.get('/items', function(req, res) {

  return res.json({ items });
})

/** Handles creating new item */
app.post('/items', function(req, res) {
  const name = req.body.name;
  const price = req.body.price;

  const item = Item.createItem(name, price);

  return res.json({
    added: item
  });

})

/**returns specified item */
app.get('/items/:name', function(req,res){
  return res.json(Item.getItem(req.params.name));
})


/** Handles updating item */
app.patch('/items/:name', function(req, res) {
  const currItem = Item.getItem(req.params.name);
  const newName = req.body.name;
  const newPrice = req.body.price;

  const item = Item.updateItem(currItem,newName,newPrice);

  return res.json({
    updated: item
  });

});

app.delete('/items/:name',function(req,res){
  const currItem = Item.getItem(req.params.name);

  Item.deleteItem(currItem);

  return res.json({
    message: "Deleted"
  });

})
  //method for delete
module.exports = app;