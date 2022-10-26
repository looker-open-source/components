"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _testingReact = require("@storybook/testing-react");

var _Ripple = require("../../../Ripple");

var stories = _interopRequireWildcard(require("./Checkbox.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    Checked = _composeStories.Checked,
    Disabled = _composeStories.Disabled,
    DisabledChecked = _composeStories.DisabledChecked,
    MixedChecked = _composeStories.MixedChecked,
    ReadOnly = _composeStories.ReadOnly;

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

describe('Checkbox', function () {
  test('renders', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('checked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Checked, null));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toBeChecked();
  });
  test('mixed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(MixedChecked, null));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toBeChecked();
    expect(_react2.screen.getByText('Check Mark Mixed')).toBeInTheDocument();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Disabled, null));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(checkboxInput).toBeDisabled();
  });
  test('disabled & checked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(DisabledChecked, null));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(checkboxInput).toBeChecked();
    expect(checkboxInput).toBeDisabled();
  });
  test('Accepts defaultChecked prop, and toggles value without change handler', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      defaultChecked: true
    }));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(checkboxInput).toBeChecked();

    _react2.fireEvent.click(checkboxInput);

    expect(checkboxInput).not.toBeChecked();
  });
  test('Accepts checked prop, and is readOnly without a change handler', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Checked, null));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(checkboxInput).toBeChecked();

    _react2.fireEvent.click(checkboxInput);

    expect(checkboxInput).toBeChecked();
  });
  test('Triggers onChange handler', function () {
    var mockProps = {
      onChange: jest.fn()
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, mockProps));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    expect(mockProps.onChange).not.toHaveBeenCalled();
    expect(checkboxInput).not.toBeChecked();

    _react2.fireEvent.click(checkboxInput);

    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(checkboxInput).toBeChecked();
  });
  test("Checkbox readOnly doesn't register change events", function () {
    var mockProps = {
      onChange: jest.fn()
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ReadOnly, (0, _extends2["default"])({
      id: "checkboxID"
    }, mockProps)));

    var checkboxInput = _react2.screen.getByRole('checkbox');

    _react2.fireEvent.click(checkboxInput);

    expect(mockProps.onChange).toHaveBeenCalledTimes(0);
  });
  test('Supports aria-describedby', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      "aria-describedby": "some-id",
      id: "checkboxID"
    }));
    expect(_react2.screen.getByRole('checkbox')).toHaveAttribute('aria-describedby', 'some-id');
  });
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

    var checkboxWrapper = _react2.screen.getByRole('checkbox').closest('div');

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkboxWrapper).not.toHaveClass('bg-on fg-in');
    expect(checkboxWrapper).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': _Ripple.RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });

    _react2.fireEvent.focus(checkbox);

    expect(checkboxWrapper).toHaveClass('bg-on');

    _react2.fireEvent.mouseDown(checkbox);

    expect(checkboxWrapper).toHaveClass('bg-on fg-in');

    _react2.fireEvent.mouseUp(checkbox);

    runTimers();
    expect(checkboxWrapper).toHaveClass('bg-on fg-out');
    runTimers();
    expect(checkboxWrapper).toHaveClass('bg-on');

    _react2.fireEvent.blur(checkbox);

    expect(checkboxWrapper).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=Checkbox.spec.js.map