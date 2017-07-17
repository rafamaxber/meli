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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _style3 = require('./style');

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Loading = require('../Loading/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Resources = require('../../Resources/Resources');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael/Projects/meli/client/components/Items/Items.js';


var FreeShipingIco = function FreeShipingIco(props) {
  if (props.free_shipping) {
    return _react2.default.createElement('img', { src: '/static/img/ic_shipping.png', alt: 'Free Shipping', title: 'Free Shipping', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    });
  }
  return _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  });
};

var Items = function (_PureComponent) {
  (0, _inherits3.default)(Items, _PureComponent);

  function Items(props) {
    (0, _classCallCheck3.default)(this, Items);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Items.__proto__ || (0, _getPrototypeOf2.default)(Items)).call(this, props));

    _this.state = {
      items: [],
      loading: true,
      errors: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Items, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ loading: true });
      (0, _Resources.searchItems)(this.props.searchText).then(function (res) {
        console.log(res);
        _this2.props.breadCrumbs(res.data.categories);
        _this2.setState({ items: res.data.items, loading: false });
      }).catch(function (err) {
        _this2.setState({ errors: true, items: [], loading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.errors) return _react2.default.createElement(_NotFound2.default, { errors: this.state.errors, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      });
      if (this.state.loading) return _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
      if (this.state.items.length === 0) return _react2.default.createElement(_NotFound2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
      var cardList = this.state.items.map(function (item) {
        return _react2.default.createElement('div', { className: 'card-item', key: item.id, 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement('figure', { className: 'card-item-image', 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement(_link2.default, { role: 'link', as: '/items/' + item.id, href: '/items?id=' + item.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement('img', { src: item.picture, alt: item.title, title: item.title, 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }))), _react2.default.createElement('div', { className: 'card-item-description', 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement('div', { className: 'card-item-price', 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, '$ ', item.price.decimals, ' ', _react2.default.createElement(FreeShipingIco, { free_shipping: item.free_shipping, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        })), _react2.default.createElement('h2', { className: 'card-item-title', 'aria-label': item.title, 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement(_link2.default, { role: 'link', as: '/items/' + item.id, href: '/items?id=' + item.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement('a', { className: 'card-item-title__link', 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, item.title)))), _react2.default.createElement('div', { className: 'card-item-location', 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement('div', { className: 'card-item-location-name', 'data-jsx-ext': _style3.ItemsStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, item.address.state_name)), _react2.default.createElement(_style2.default, {
          styleId: _style3.ItemsStyle.__scopedHash,
          css: _style3.ItemsStyle.__scoped
        }));
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, cardList);
    }
  }]);

  return Items;
}(_react.PureComponent);

exports.default = Items;