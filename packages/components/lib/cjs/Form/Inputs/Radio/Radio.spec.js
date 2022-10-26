"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _testingReact = require("@storybook/testing-react");

var _Ripple = require("../../../Ripple");

var stories = _interopRequireWildcard(require("./Radio.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    Disabled = _composeStories.Disabled,
    DisabledChecked = _composeStories.DisabledChecked;

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

describe('Radio', function () {
  test('renders properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByRole('radio')).toBeInTheDocument();
  });
  test('accepts defaultChecked prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      defaultChecked: true
    }));
    expect(_react2.screen.getByRole('radio')).toBeChecked();
  });
  test('should accept disabled prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Disabled, null));
    expect(_react2.screen.getByRole('radio')).toBeDisabled();
  });
  test('should accept disabled and checked props together', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(DisabledChecked, null));
    expect(_react2.screen.getByRole('radio')).toBeDisabled();
    expect(_react2.screen.getByRole('radio')).toBeChecked();
  });
  test('has aria-describedby attribute', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      "aria-describedby": "some-id",
      id: "RadioID"
    }));
    expect(_react2.screen.getByRole('radio')).toHaveAttribute('aria-describedby', 'some-id');
  });
  test('renders with error', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      validationType: "error"
    }));
    expect(_react2.screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });
  test('renders checked with error', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      defaultChecked: true,
      validationType: "error"
    }));
    expect(_react2.screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });
  test('should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      id: "radioID",
      onChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByRole('radio'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

    var radioWrapper = _react2.screen.getByRole('radio').closest('div');

    var radio = _react2.screen.getByRole('radio');

    expect(radioWrapper).not.toHaveClass('bg-on fg-in');
    expect(radioWrapper).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': _Ripple.RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });

    _react2.fireEvent.focus(radio);

    expect(radioWrapper).toHaveClass('bg-on');

    _react2.fireEvent.mouseDown(radio);

    expect(radioWrapper).toHaveClass('bg-on fg-in');

    _react2.fireEvent.mouseUp(radio);

    runTimers();
    expect(radioWrapper).toHaveClass('bg-on fg-out');
    runTimers();
    expect(radioWrapper).toHaveClass('bg-on');

    _react2.fireEvent.blur(radio);

    expect(radioWrapper).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=Radio.spec.js.map