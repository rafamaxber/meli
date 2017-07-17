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

var _jsxFileName = "/home/rafael/Projects/meli/client/components/BreadCrumbs/BreadCrumbs.js";


var Arrow = function Arrow() {
  return _react2.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("g", { fill: "#999999", fillRule: "evenodd", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("path", { d: "M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement("path", { d: "M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })));
};

var BreadCrumbs = function BreadCrumbs(props) {
  var steps = props.steps.map(function (item, index, array) {
    if (index + 1 >= array.length) return _react2.default.createElement("li", { className: "breadcrumb-item", key: index, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, item);
    return _react2.default.createElement("li", { className: "breadcrumb-item", key: index, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, item, " ", _react2.default.createElement(Arrow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }));
  });
  return _react2.default.createElement("div", { className: "limits", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("nav", { className: "breadcrumb", "aria-label": "Breadcrumb", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement("ul", { className: "breadcrumb-list", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, steps)), _react2.default.createElement(_style2.default, {
    styleId: _style3.BreadCrumbsStyle.__hash,
    css: _style3.BreadCrumbsStyle
  }));
};

exports.default = BreadCrumbs;