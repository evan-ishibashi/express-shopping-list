const request = require("supertest");

const app = require("./app");
const { items, Item } = require('./fakeDb');



beforeEach(function() {
  Item.deleteAll();
  Item.createItem("bananas", 2.75)
})

describe('GET /items', function() {

  it('Gets the list of all grocery items', async function() {
    const resp = await request(app).get('/items');

    expect(resp.body).toEqual({
      "items": [
        {
          "name": "bananas",
          "price": 2.75
        }
      ]
    })
  })

  it('Gets the individual item by its name',  async function() {
    const resp = await request(app).get('/items/bananas');

    expect(resp.body).toEqual(
      {
        "name": "bananas",
        "price": 2.75
      })
    })
})


describe('POST /items', function() {

  it('Should create a new item',  async function() {
    const newItem = {
      "name": "cookies",
      "price": 3.99
    }

    const resp = await request(app).post('/items').send(newItem);

    expect(resp.body).toEqual({
      "added": newItem
    })
    console.log(items)
    expect(items[1]).toEqual(newItem);
  })
})