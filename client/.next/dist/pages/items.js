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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MainLayout = require('../components/MainLayout/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _Item = require('../components/Items/Item');

var _Item2 = _interopRequireDefault(_Item);

var _Items = require('../components/Items/Items');

var _Items2 = _interopRequireDefault(_Items);

var _NotFound = require('../components/Items/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _BreadCrumbs = require('../components/BreadCrumbs/BreadCrumbs');

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael/Projects/meli/client/pages/items.js?entry';


var SelectComponent = function SelectComponent(props) {

  if (props.urlQuery.search) {
    return _react2.default.createElement(_Items2.default, { searchText: props.urlQuery.search, breadCrumbs: props.breadCrumb, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    });
  }
  if (props.urlQuery.id) {
    return _react2.default.createElement(_Item2.default, { itemId: props.urlQuery.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    });
  }

  return _react2.default.createElement(_NotFound2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  });
};

var Layout = function (_PureComponent) {
  (0, _inherits3.default)(Layout, _PureComponent);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.state = {
      steps: []
    };
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'breadCrumbSteps',
    value: function breadCrumbSteps(steps) {
      this.setState({ steps: steps });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MainLayout2.default, { breadCrumb: _react2.default.createElement(_BreadCrumbs2.default, { steps: this.state.steps, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', { className: 'limits', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(SelectComponent, { breadCrumb: this.breadCrumbSteps.bind(this), urlQuery: this.props.url.query, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })));
    }
  }]);

  return Layout;
}(_react.PureComponent);

exports.default = Layout;