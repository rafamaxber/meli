"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/rafael/Projects/meli/client/components/MainLayout.js";


var MainLayout = function MainLayout(props) {
  return _react2.default.createElement("div", { className: "container-site", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), _react2.default.createElement("div", { className: "content", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.children));
};

exports.default = MainLayout;