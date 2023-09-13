const items = [];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static createItem(name, price) {
    if (items.includes(name)) {
      throw new Error('Grocery list already contains that item!');
    }

    const item = new Item(name, price);

    items.push(item);

    return item;
  }


  static getItem(name) {
    for (const item of items) {
      if (item.name === name) {
        return item;
      }
    }

    throw new Error('Could not find item!');
  }


  static updateItem(name, price) {
    let currItem;

    for (const item of items) {
      if (item.name === name && item.price === price) {
        currItem = item;
      }
    }

    //update currItem
  }


}

module.exports = { items, Item };