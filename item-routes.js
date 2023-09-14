const express = require("express");

const {items, Item } = require('./fakeDb');
const router = new express.Router();


/** Respond to get request for items with JSON for all items. */
router.get('/', function(req, res) {

  return res.json({ items });
})

/** Handles creating new item */
router.post('/', function(req, res) {
  const name = req.body.name;
  const price = req.body.price;

  const item = Item.createItem(name, price);

  return res.json({
    added: item
  });

})

/**returns specified item */
router.get('/:name', function(req,res){
  return res.json(Item.getItem(req.params.name));
})


/** Handles updating item */
router.patch('/:name', function(req, res) {
  const currItem = Item.getItem(req.params.name);
  const newName = req.body.name;
  const newPrice = req.body.price;

  const item = Item.updateItem(currItem,newName,newPrice);

  return res.json({
    updated: item
  });

});

router.delete('/:name',function(req,res){
  const currItem = Item.getItem(req.params.name);

  Item.deleteItem(currItem);

  return res.json({
    message: "Deleted"
  });

})

module.exports = router;