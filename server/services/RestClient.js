function MercadoLibreApi() {
  this._client = require('axios')
  this._apiUrl = 'https://api.mercadolibre.com';
  this._siteId = 'MLA';
  this._id = ''
}

MercadoLibreApi.prototype._setItemId = function(value) {
  this.id = value
}

MercadoLibreApi.prototype._getItemId = function() {
  return this.id
}

MercadoLibreApi.prototype.search = function(query) {
  return this._client
    .get(`${this._apiUrl}/sites/${this._siteId}/search?q=${encodeURIComponent(query)}`)
    .catch(err => err)
}

MercadoLibreApi.prototype.fetchItemById = function(itemId) {
  this._setItemId(itemId)

  return this._client.all([
    this.getItemById(),
    this.getDescriptionItemById()
  ])
  .catch(err => err)
}

MercadoLibreApi.prototype.getItemById = function() {
  return this._client
    .get(`${this._apiUrl}/items/${this._getItemId()}`)
    .catch(err => err)
}

MercadoLibreApi.prototype.getDescriptionItemById = function() {
  return this._client
    .get(`${this._apiUrl}/items/${this._getItemId()}/description`)
    .catch(err => err)
}

module.exports = () => MercadoLibreApi;