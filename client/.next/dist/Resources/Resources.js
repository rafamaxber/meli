'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchItems = exports.fetchItemById = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = 'http://localhost:4040/api/items';

var fetchItemById = exports.fetchItemById = function fetchItemById(id) {
  return _axios2.default.get(API_URL + '/' + id);
};

var searchItems = exports.searchItems = function searchItems(query) {
  return _axios2.default.get(API_URL + '?q=' + encodeURIComponent(query));
};