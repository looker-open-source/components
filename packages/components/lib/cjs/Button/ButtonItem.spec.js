"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("@testing-library/jest-dom/extend-expect");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _ButtonItem = require("./ButtonItem");

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

describe('ButtonItem', function () {
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonItem.ButtonItem, null, "Button Item"));

    var button = _react.screen.getByRole('button');

    expect(button).not.toHaveClass('bg-on fg-in');
    expect(button).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    button && _react.fireEvent.focus(button);
    expect(button).toHaveClass('bg-on');
    button && _react.fireEvent.mouseDown(button);
    expect(button).toHaveClass('bg-on fg-in');
    button && _react.fireEvent.mouseUp(button);
    runTimers();
    expect(button).toHaveClass('bg-on fg-out');
    runTimers();
    expect(button).toHaveClass('bg-on');
    button && _react.fireEvent.blur(button);
    expect(button).not.toHaveClass('bg-on fg-in');

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=ButtonItem.spec.js.map