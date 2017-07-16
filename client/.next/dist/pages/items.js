'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _MainLayout = require('../components/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael/Projects/meli/client/pages/items.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MainLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'ITEMS'), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'ITEMS')), console.log(props.url.query.id));
};

exports.default = Index;