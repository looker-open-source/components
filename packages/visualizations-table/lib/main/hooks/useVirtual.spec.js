"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactHooks = require("@testing-library/react-hooks");
var _react2 = require("@testing-library/react");
var _useVirtual = require("./useVirtual");

var wrapper = function wrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, children);
};
var mockDomRect = {
  x: 146,
  y: 50,
  width: 440,
  height: 50,
  top: 50,
  right: 586,
  bottom: 290,
  left: 146,
  toJSON: function toJSON() {
    return {};
  }
};
it('Configures virtual scrolling object', function () {
  var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _useVirtual.useVirtual)({
        data: Array(15).fill({}),
        scrollContainer: {
          current: {
            addEventListener: function addEventListener() {
              return null;
            },
            removeEventListener: function removeEventListener() {
              return null;
            },
            getBoundingClientRect: function getBoundingClientRect() {
              return mockDomRect;
            }
          }
        }
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook.result;
  expect(result.current.virtualRows.length).toEqual(15);
});
it('Simulates scroll height with OffsetBottom component', function () {
  var _renderHook2 = (0, _reactHooks.renderHook)(function () {
      return (0, _useVirtual.useVirtual)({
        data: Array(30).fill({}),
        scrollContainer: {
          current: {
            addEventListener: function addEventListener() {
              return null;
            },
            removeEventListener: function removeEventListener() {
              return null;
            },
            getBoundingClientRect: function getBoundingClientRect() {
              return mockDomRect;
            }
          }
        }
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook2.result;
  var OffsetBottom = result.current.OffsetBottom;
  var MockTableComponent = function MockTableComponent() {
    return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement(OffsetBottom, null)));
  };
  (0, _react2.render)(_react["default"].createElement(MockTableComponent, null));
  var spacer = _react2.screen.getByRole('cell');
  expect(spacer).toHaveAttribute('height', '150');
});
it('Simulates scroll height with OffsetTop component', function () {
  var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return (0, _useVirtual.useVirtual)({
        data: Array(30).fill({}),
        scrollContainer: {
          current: {
            addEventListener: function addEventListener() {
              return null;
            },
            removeEventListener: function removeEventListener() {
              return null;
            },
            getBoundingClientRect: function getBoundingClientRect() {
              return mockDomRect;
            }
          }
        }
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook3.result;
  var OffsetTop = result.current.OffsetTop;
  var MockTableComponent = function MockTableComponent() {
    return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement(OffsetTop, null)));
  };
  (0, _react2.render)(_react["default"].createElement(MockTableComponent, null));
  var spacer = _react2.screen.getByRole('cell');
  expect(spacer).toHaveAttribute('height', '120');
});
//# sourceMappingURL=useVirtual.spec.js.map