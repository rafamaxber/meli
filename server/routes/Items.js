const axios = require('axios')

module.exports = (app) => {
  const controllerItems = app.controllers.ControllerItems;

  app.get('/api/items', function(req, res) {
    const query = req.query.q
    if (!query) {
      return res.status(400)
        .json(controllerItems.itemNotFound())
    }

    controllerItems.searchItems(query)
    .then(result => {
      return res.json(result);
    })
  });

  app.get('/api/items/:id', function(req, res) {
    const id = req.params.id;
    controllerItems.fetchItemById(id)
    .then(result => {
      return res.json(result);
    })

  });

}