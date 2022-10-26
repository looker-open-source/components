"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _react2 = _interopRequireDefault(require("react"));

var _useFocusVisible2 = require("./useFocusVisible");

var _excluded = ["onBlur", "onKeyUp"],
    _excluded2 = ["focusVisible"];

var FocusVisibleComponent = function FocusVisibleComponent(_ref) {
  var onBlur = _ref.onBlur,
      onKeyUp = _ref.onKeyUp,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useFocusVisible = (0, _useFocusVisible2.useFocusVisible)({
    onBlur: onBlur,
    onKeyUp: onKeyUp
  }),
      focusVisible = _useFocusVisible.focusVisible,
      handlers = (0, _objectWithoutProperties2["default"])(_useFocusVisible, _excluded2);

  return _react2["default"].createElement("button", (0, _extends2["default"])({}, props, handlers, {
    type: "button"
  }), focusVisible.toString());
};

describe('useFocusVisible', function () {
  test('false when clicking', function () {
    (0, _react.render)(_react2["default"].createElement(FocusVisibleComponent, null));

    var button = _react.screen.getByRole('button');

    _userEvent["default"].click(button);

    expect(button).toHaveFocus();
    expect(button).toHaveTextContent('false');
  });
  test('true when tabbing', function () {
    (0, _react.render)(_react2["default"].createElement(FocusVisibleComponent, null));

    var button = _react.screen.getByRole('button');

    _userEvent["default"].tab();

    expect(button).toHaveFocus();
    expect(button).toHaveTextContent('true');
  });
  test('removed on blur', function () {
    (0, _react.render)(_react2["default"].createElement(FocusVisibleComponent, null));

    var button = _react.screen.getByRole('button');

    _userEvent["default"].tab();

    expect(button).toHaveTextContent('true');

    _userEvent["default"].tab();

    expect(button).toHaveTextContent('false');
  });
});
//# sourceMappingURL=useFocusVisible.spec.js.map