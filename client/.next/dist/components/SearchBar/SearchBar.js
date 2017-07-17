"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("next/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _style3 = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/rafael/Projects/meli/client/components/SearchBar/SearchBar.js";


var SearchIcon = function SearchIcon() {
  return _react2.default.createElement("img", { src: "/static/img/ic_Search.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
};

var SearchBar = function SearchBar() {
  return _react2.default.createElement("div", { className: "search_bar", "data-jsx-ext": _style3.SearchBarStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("form", { action: "/items", method: "GET", role: "search", "data-jsx-ext": _style3.SearchBarStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("input", { className: "search_input", maxLength: "120", name: "search", "aria-required": "true", type: "search", required: true, placeholder: "Buscar Producto", autoFocus: true, autoCapitalize: "off", autoCorrect: "off", "aria-autocomplete": "list", "data-jsx-ext": _style3.SearchBarStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement("button", { className: "search_button", type: "submit", "aria-label": "Buscar", "data-jsx-ext": _style3.SearchBarStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(SearchIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement("span", { hidden: true, "data-jsx-ext": _style3.SearchBarStyle.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Buscar"))), _react2.default.createElement(_style2.default, {
    styleId: _style3.SearchBarStyle.__scopedHash,
    css: _style3.SearchBarStyle.__scoped
  }));
};

exports.default = SearchBar;