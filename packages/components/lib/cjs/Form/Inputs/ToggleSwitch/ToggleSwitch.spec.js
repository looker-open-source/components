"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _testingReact = require("@storybook/testing-react");

var _Ripple = require("../../../Ripple");

var stories = _interopRequireWildcard(require("./ToggleSwitch.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    Checked = _composeStories.Checked,
    Disabled = _composeStories.Disabled;

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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByRole('switch')).not.toBeChecked();
  });
  test('on', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Checked, null));
    expect(_react2.screen.getByRole('switch')).toBeChecked();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Disabled, null));
    expect(_react2.screen.getByRole('switch')).toBeDisabled();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Disabled, null));
    expect(_react2.screen.getByRole('switch')).toBeDisabled();
  });
  test('Should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      onChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByRole('switch'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

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