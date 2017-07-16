
function MercadoLibreApi() {
  this._client = require('axios')
  this._apiUrl = `https://api.mercadolibre.com`;
  this._id = ''
}

MercadoLibreApi.prototype._setItemId = function(value) {
  this.id = value
}

MercadoLibreApi.prototype._getItemId = function() {
  return this.id
}

MercadoLibreApi.prototype.search = function(query) {
  return this._client.get(`${this._apiUrl}/sites/MLA/search?q=${encodeURIComponent(query)}`)
}

MercadoLibreApi.prototype.fetchItemById = function(id) {
  this._setItemId(id)

  return this._client.all([
    this.getItemById(),
    this.getDescriptionItemById()
  ])
}

MercadoLibreApi.prototype.getItemById = function() {
  return this._client.get(`${this._apiUrl}/items/${this._getItemId()}`)
}

MercadoLibreApi.prototype.getDescriptionItemById = function() {
  return this._client.get(`${this._apiUrl}/items/${this._getItemId()}/description`)
}


module.exports = () => MercadoLibreApi;