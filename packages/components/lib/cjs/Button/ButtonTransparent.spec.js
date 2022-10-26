"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

require("@testing-library/jest-dom/extend-expect");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ButtonTransparent = require("./ButtonTransparent");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('ButtonTransparent', function () {
  test('ripple effect default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ButtonTransparent.ButtonTransparent, null, "Test"));

    var button = _react2.screen.getByRole('button');

    expect(button).not.toHaveClass('bg-on fg-in');
    expect(button).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });

    _react2.fireEvent.focus(button);

    expect(button).toHaveClass('bg-on');

    _react2.fireEvent.mouseDown(button);

    expect(button).toHaveClass('bg-on fg-in');

    _react2.fireEvent.mouseUp(button);

    runTimers();
    expect(button).toHaveClass('bg-on fg-out');
    runTimers();
    expect(button).toHaveClass('bg-on');

    _react2.fireEvent.blur(button);

    expect(button).not.toHaveClass('bg-on fg-in');
  });
  test('Color critical', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
      color: "critical"
    }, "Test"));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveStyle({
      '--ripple-color': '#CC1F36'
    });
  });
});
//# sourceMappingURL=ButtonTransparent.spec.js.map