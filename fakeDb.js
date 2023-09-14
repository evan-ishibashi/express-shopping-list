"use strict";

/**fake db */
let items = [];


/** Item class */
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
/** adds new item to db */
  static createItem(name, price) {
    if (items.includes(name)) {
      throw new Error('Grocery list already contains that item!');
    }

    const item = new Item(name, price);

    items.push(item);

    return item;
  }

/** finds item, else throws error */
  static getItem(findName) {
    for (const item of items) {
      console.log("item.name =", item.name);
      console.log("findName =", findName);
      if (item.name === findName) {
        return item;
      }
    }

    throw new Error('Could not find item!');
  }

/** finds item, updates in db, and returns updated item */
  static updateItem(currItem,newName,newPrice) {
    const idx = items.indexOf(currItem);

    items[idx].name = newName;
    items[idx].price = newPrice;
    return currItem;


  }

  static deleteItem(currItem){
    items = items.filter(i => i !== currItem);
  }
}



module.exports = { items, Item };