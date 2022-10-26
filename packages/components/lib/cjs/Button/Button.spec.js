"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Button = require("./Button");

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

describe('Button', function () {
  test('accepts a className prop', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Button.Button, {
      className: "foo"
    }, "button with class")),
        container = _renderWithTheme.container;

    expect(container.firstChild).toHaveClass('foo');
  });
  test('size', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
      size: "xxsmall"
    }, "Xsmall Button"), _react["default"].createElement(_Button.Button, {
      size: "large"
    }, "Large Button")));
    expect(_react2.screen.getByText('Xsmall Button')).toBeInTheDocument();
    expect(_react2.screen.getByText('Large Button')).toBeInTheDocument();
  });
  describe('ripple effect', function () {
    test('default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Button.Button, null, "Test"));

      var button = _react2.screen.getByRole('button');

      expect(button).not.toHaveClass('bg-on fg-in');
      expect(button).toHaveStyle({
        '--ripple-color': '#FFFFFF',
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
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Button.Button, {
        color: "critical"
      }, "Test"));

      var button = _react2.screen.getByRole('button');

      expect(button).toHaveStyle({
        '--ripple-color': '#FFFFFF'
      });
    });
  });
});
//# sourceMappingURL=Button.spec.js.map