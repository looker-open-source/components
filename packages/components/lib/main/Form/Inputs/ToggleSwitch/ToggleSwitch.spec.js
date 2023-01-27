"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("jest-styled-components");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Ripple = require("../../../Ripple");
var _index = require("./stories/index.stories");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.resetAllMocks();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};
describe('ToggleSwitch', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));
    expect(_react2.screen.getByRole('switch')).not.toBeChecked();
  });
  test('on', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Checked, null));
    expect(_react2.screen.getByRole('switch')).toBeChecked();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Disabled, null));
    expect(_react2.screen.getByRole('switch')).toBeDisabled();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Disabled, null));
    expect(_react2.screen.getByRole('switch')).toBeDisabled();
  });
  test('Should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, {
      onChange: onChange
    }));
    _react2.fireEvent.click(_react2.screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));
    var input = _react2.screen.getByRole('switch');
    var handle = _react2.screen.getByTestId('handle');
    expect(handle).not.toHaveClass('bg-on fg-in');
    expect(handle).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': _Ripple.RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    _react2.fireEvent.focus(input);
    expect(handle).toHaveClass('bg-on');
    _react2.fireEvent.mouseDown(input);
    expect(handle).toHaveClass('bg-on fg-in');

    _react2.fireEvent.mouseUp(input);
    runTimers();
    expect(handle).toHaveClass('bg-on fg-out');
    runTimers();
    expect(handle).toHaveClass('bg-on');
    _react2.fireEvent.blur(input);
    expect(handle).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=ToggleSwitch.spec.js.map