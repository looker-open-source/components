"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _AvatarButton = require("./AvatarButton");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('AvatarButton', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarButton.AvatarButton, {
      label: "Avatar"
    }));

    var button = _react.screen.getByRole('button');

    expect(button).not.toHaveClass('bg-on fg-in');
    expect(button).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });

    _react.fireEvent.focus(button);

    expect(button).toHaveClass('bg-on');

    _react.fireEvent.mouseDown(button);

    expect(button).toHaveClass('bg-on fg-in');

    _react.fireEvent.mouseUp(button);

    runTimers();
    expect(button).toHaveClass('bg-on fg-out');
    runTimers();
    expect(button).toHaveClass('bg-on');

    _react.fireEvent.blur(button);

    expect(button).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=AvatarButton.spec.js.map