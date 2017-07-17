'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _style3 = require('../Reset/style');

var _styleGlobal = require('./styleGlobal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael/Projects/meli/client/components/MainLayout/MainLayout.js';


var MainLayout = function MainLayout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Mercado Livre'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('div', { className: 'container-site', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), props.breadCrumb, _react2.default.createElement('div', { className: 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.children), _react2.default.createElement(_style2.default, {
    styleId: _style3.ResetCss.__hash,
    css: _style3.ResetCss
  }), _react2.default.createElement(_style2.default, {
    styleId: _styleGlobal.MainLayoutStyleGlobal.__hash,
    css: _styleGlobal.MainLayoutStyleGlobal
  })));
};

exports.default = MainLayout;