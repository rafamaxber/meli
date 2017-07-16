
          window.__NEXT_REGISTER_PAGE('/items', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

var _MainLayout = __webpack_require__(545);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/rafael/Projects/meli/client/pages/items.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/rafael/Projects/meli/client/pages/items.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/items")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/rafael/Projects/meli/client/components/Header.js";

var Header = function Header() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("div", { className: "logo", __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "LOGO"), _react2.default.createElement("div", { className: "container-menu", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "link 1"), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "link 2"), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "link 3"))));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/rafael/Projects/meli/client/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/rafael/Projects/meli/client/components/Header.js"); } } })();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(544);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/rafael/Projects/meli/client/components/MainLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/rafael/Projects/meli/client/components/MainLayout.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ })

},[546]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pdGVtcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2l0ZW1zLmpzPzBmNmM4NWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MGY2Yzg1ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5MYXlvdXQuanM/MGY2Yzg1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL01haW5MYXlvdXQnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxNYWluTGF5b3V0PlxuICAgIDxwPklURU1TPC9wPlxuICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIDxhPklURU1TPC9hPlxuICAgIDwvTGluaz5cbiAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy51cmwucXVlcnkuaWQpfVxuICA8L01haW5MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaXRlbXMuanM/ZW50cnkiLCJjb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+TE9HTzwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW1lbnVcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPmxpbmsgMTwvbGk+XG4gICAgICAgIDxsaT5saW5rIDI8L2xpPlxuICAgICAgICA8bGk+bGluayAzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmNvbnN0IE1haW5MYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItc2l0ZVwiPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj4gICAgXG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NYWluTGF5b3V0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        