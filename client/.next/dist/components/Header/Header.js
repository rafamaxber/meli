'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _SearchBar = require('../SearchBar/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _style3 = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael/Projects/meli/client/components/Header/Header.js';


var Header = function Header() {
  return _react2.default.createElement('div', { className: 'main_header', 'data-jsx-ext': _style3.HeaderStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'limits', 'data-jsx-ext': _style3.HeaderStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_SearchBar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: _style3.HeaderStyle.__scopedHash,
    css: _style3.HeaderStyle.__scoped
  }));
};

var Logo = function Logo() {
  return _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { className: 'logo', role: 'link', 'data-jsx-ext': _style3.LogoStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('img', { src: '/static/img/Logo_ML.png', alt: 'Mercado Libre', title: 'Mercado Libre', 'data-jsx-ext': _style3.LogoStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: _style3.LogoStyle.__scopedHash,
    css: _style3.LogoStyle.__scoped
  })));
};

exports.default = Header;