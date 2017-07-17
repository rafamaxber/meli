module.exports = (app) => {

  const ITEMS_LIMIT = 4;
  const CATEGORIES_LIMIT = 5;
  
  const Api = new app.services.RestClient();

  const $private = {

    getItems(obj) {
      return obj.results.map(item => {
        return {
          "id": item.id,
          "title": item.title,
          "price": {
            "currency": item.currency_id,
            "amount": item.available_quantity,
            "decimals": item.price,
          },
          "address": {
            "state_name": item.address.state_name
          },
          "picture": item.thumbnail,
          "condition": item.condition,
          "free_shipping": item.shipping.free_shipping,
        }
      }).slice(0, ITEMS_LIMIT)
    },

    getCategories(obj) {
      if (obj.filters[0]) {
        return obj.filters[0].values[0].path_from_root
          .map(item => item.name)
          .slice(0, CATEGORIES_LIMIT)
      }
      if (obj.available_filters[0]) {
        return obj.available_filters[0].values
          .sort((a, b) => b.results - a.results)
          .map(item => item.name)
          .slice(0, CATEGORIES_LIMIT)
      }
      return Array()
    }
  }

  const ControllerItems = {
    itemNotFound() {
      return {
        error: 'Valor não encontrado!',
        status: 400
      }
    },

    searchItems(query) {
      return Api.search(query)
        .then(response => {
          const categories = $private.getCategories(response.data)
          const items = $private.getItems(response.data)
          return {
            "author": {
              "name": "Rafael",
              "lastname": "Bernardo"
            },
            "categories": categories,
            "items": items
          }
        })
        .catch(err => {
          return ControllerItems.itemNotFound()
        })
    },

    fetchItemById(id) {
      return Api.fetchItemById(id)
        .then(response => {
          let item = response[0].data
          let description = response[1].data.text
          return {
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
          }
        })
        .catch(err => {
          return ControllerItems.itemNotFound()
        })
    }
 
  }

  return ControllerItems;

}