const axios = require('axios')

const ITEMS_LIMIT = 4  

function getItems(obj) {
  return obj.results.map((item, index) => {
    return {
      "id": item.id,
      "title": item.title,
      "price": {
        "currency": item.currency_id,
        "amount": item.available_quantity,
        "decimals": item.price,
      },
      "picture": item.thumbnail,
      "condition": item.condition,
      "free_shipping": item.shipping.free_shipping,
    }
  }).slice(0, ITEMS_LIMIT)
}

module.exports = (app) => {
  
  const Api = new app.services.RestClient();

  app.get('/api/items', function(req, res) {
    const query = req.query.q
    if (!query) {
      return res.status(400).json({ error: 'Valor não encontrado!' })
    }

    Api.search(query)
    .then(response => {
      return res.json({
        "author": {
          "name": "Rafael",
          "lastname": "Bernardo"
        },
        "categories": [],
        "items": getItems(response.data)
      })
    })

  });

  app.get('/api/items/:id', function(req, res) {
    const id = req.params.id;
    Api.fetchItemById(id)
    .then(response => {
      let item = response[0].data
      let description = response[1].data.text
      return res.json({
        "author": {
          "name": "Rafael",
          "lastname": "Bernardo"
        },
        "item": {
          "id": item.id,
          "title": item.title,
          "price": {
            "currency": item.currency_id,
            "amount": item.available_quantity,
            "decimals": item.price,
          },
          "picture": item.pictures[0].url,
          "condition": item.condition,
          "free_shipping": item.shipping.free_shipping,
          "sold_quantity": item.sold_quantity,
          "description": description
        }
      })
    })
    
  });


}