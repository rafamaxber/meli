'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Resources = require('../../Resources/Resources');

var _style3 = require('./style');

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Loading = require('../Loading/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael/Projects/meli/client/components/Items/Item.js';


var Item = function (_PureComponent) {
  (0, _inherits3.default)(Item, _PureComponent);

  function Item(props) {
    (0, _classCallCheck3.default)(this, Item);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call(this, props));

    _this.state = {
      item: {},
      loading: true
    };
    return _this;
  }

  (0, _createClass3.default)(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ loading: true });
      (0, _Resources.fetchItemById)(this.props.itemId).then(function (res) {
        _this2.setState({ item: res.data.item, loading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.loading) return _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      });
      if (!this.state.item) return _react2.default.createElement(_NotFound2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      });
      return _react2.default.createElement('div', { className: 'card-hero-item', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('figure', { className: 'card-hero-item-image-container', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('img', { className: 'card-hero-item-image', src: this.state.item.picture, alt: this.state.item.title, title: this.state.item.title, 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement('div', { className: 'card-hero-item-info', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', { className: 'card-item-sold-info', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('span', { className: 'card-item-condition', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.state.item.condition), _react2.default.createElement('span', { className: 'card-item-sold-quantity', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, ' - ', this.state.item.sold_quantity), _react2.default.createElement('span', { className: 'card-item-sold-text', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, ' vendidos')), _react2.default.createElement('h1', { className: 'card-hero-item-title', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.item.title), _react2.default.createElement('div', { className: 'card-hero-item-price', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, '$ ', this.state.item.price && this.state.item.price.decimals), _react2.default.createElement('div', { className: 'card-hero-item-shop-button', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('a', { className: 'shop-button', role: 'link', 'aria-label': 'Comprar', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Comprar'))), _react2.default.createElement('div', { className: 'card-hero-item-description', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h2', { className: 'card-hero-item-description-title', 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Description del producto'), _react2.default.createElement('div', { className: 'card-hero-item-description-text', dangerouslySetInnerHTML: { __html: this.state.item.description }, 'data-jsx-ext': _style3.ItemStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: _style3.ItemStyle.__scopedHash,
        css: _style3.ItemStyle.__scoped
      }));
    }
  }]);

  return Item;
}(_react.PureComponent);

// const Item = ({props}) => (

// )

exports.default = Item;