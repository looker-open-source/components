"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _useBoundedRipple2 = require("./useBoundedRipple");

var RippleComponent = function RippleComponent(props) {
  var _useBoundedRipple = (0, _useBoundedRipple2.useBoundedRipple)(props),
      _useBoundedRipple$cal = _useBoundedRipple.callbacks,
      startBG = _useBoundedRipple$cal.startBG,
      endBG = _useBoundedRipple$cal.endBG,
      startFG = _useBoundedRipple$cal.startFG,
      endFG = _useBoundedRipple$cal.endFG,
      className = _useBoundedRipple.className,
      ref = _useBoundedRipple.ref,
      style = _useBoundedRipple.style;

  return _react2["default"].createElement("div", {
    ref: ref
  }, _react2["default"].createElement("div", {
    "data-testid": "startBG",
    onClick: startBG
  }), _react2["default"].createElement("div", {
    "data-testid": "endBG",
    onClick: endBG
  }), _react2["default"].createElement("div", {
    "data-testid": "startFG",
    onClick: startFG
  }), _react2["default"].createElement("div", {
    "data-testid": "endFG",
    onClick: endFG
  }), _react2["default"].createElement("div", {
    "data-testid": "className"
  }, className), _react2["default"].createElement("div", {
    style: style
  }, "style"));
};

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(function () {
  Element.prototype.getBoundingClientRect = jest.fn(function () {
    return {
      bottom: 0,
      height: 30,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 360,
      x: 0,
      y: 0
    };
  });
});
afterEach(function () {
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});
describe('useRipple', function () {
  test('bounded animation values', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, null));
    expect(_react.screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'hidden',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0'
    });
  });
});
//# sourceMappingURL=useBoundedRipple.spec.js.map