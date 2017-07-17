"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("next/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/rafael/Projects/meli/client/components/Items/NotFound.js";

var MessageError = function MessageError(message) {
  if (message) {
    return _react2.default.createElement("div", { className: "not-found-text", __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    }, "El servidor no est\xE1 disponible temporalmente, int\xE9ntelo m\xE1s tarde!");
  }

  return _react2.default.createElement("div", { className: "not-found-text", __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "No podemos encontrar el elemento buscado :(", _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Usted puede intentar realizar una nueva b\xFAsqueda por favor!"));
};

var ItemNotFound = function ItemNotFound() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _react2.default.createElement("div", { className: "limits", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("div", { className: "not-found", "data-jsx": 693129234,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(MessageError, { message: props, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 693129234,
    css: ".not-found[data-jsx=\"693129234\"]{font-size:14px;-webkit-text-align:center;text-align:center;min-height:600px;padding-top:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbXMvTm90Rm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUcwQixnQkFBNkIsOENBQTRCLGtCQUE0QixrQkFBUyIsImZpbGUiOiJjb21wb25lbnRzL0l0ZW1zL05vdEZvdW5kLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JhZmFlbC9Qcm9qZWN0cy9tZWxpL2NsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1lc3NhZ2VFcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGlmIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kLXRleHRcIj5cbiAgICAgICAgRWwgc2Vydmlkb3Igbm8gZXN0w6EgZGlzcG9uaWJsZSB0ZW1wb3JhbG1lbnRlLCBpbnTDqW50ZWxvIG3DoXMgdGFyZGUhXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kLXRleHRcIj5cbiAgICAgIE5vIHBvZGVtb3MgZW5jb250cmFyIGVsIGVsZW1lbnRvIGJ1c2NhZG8gOihcbiAgICAgIDxkaXY+XG4gICAgICAgIFVzdGVkIHB1ZWRlIGludGVudGFyIHJlYWxpemFyIHVuYSBudWV2YSBiw7pzcXVlZGEgcG9yIGZhdm9yIVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSXRlbU5vdEZvdW5kID0gKHByb3BzID0ge30pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaW1pdHNcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZFwiPlxuICAgICAgPE1lc3NhZ2VFcnJvciBtZXNzYWdlPXtwcm9wc30gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5vdC1mb3VuZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSXRlbU5vdEZvdW5kXG4iXX0= */\n/*@ sourceURL=components/Items/NotFound.js */"
  })));
};

exports.default = ItemNotFound;