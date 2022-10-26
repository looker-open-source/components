"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Button = require("../Button");

var _Popover = require("../Popover");

var _Tooltip = require("./Tooltip");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Tooltip', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });

  var runTimers = function runTimers() {
    return (0, _react2.act)(function () {
      jest.runOnlyPendingTimers();
    });
  };

  test('trigger: delay on mouseover, exits immediately on mouseout', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Hello world"
    }, _react["default"].createElement(_Button.Button, null, "Test")));

    var trigger = _react2.screen.getByText('Test');

    _react2.fireEvent.mouseOver(trigger);

    var tooltip = _react2.screen.getByText('Hello world');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).not.toBeVisible();
    runTimers();
    expect(tooltip).toBeVisible();

    _react2.fireEvent.mouseOut(tooltip);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('isOpen', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Hello world",
      isOpen: true
    }, _react["default"].createElement(_Button.Button, null, "Test")));

    var tooltip = _react2.screen.getByText('Hello world');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).not.toBeVisible();
    runTimers();
    expect(tooltip).toBeVisible();

    _react2.fireEvent.mouseOut(tooltip);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('delayNone', function () {
    jest.useFakeTimers();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Hello world",
      isOpen: true,
      delay: "none"
    }, _react["default"].createElement(_Button.Button, null, "Test")));

    var trigger = _react2.screen.getByText('Test');

    _react2.fireEvent.mouseOver(trigger);

    runTimers();

    var tooltip = _react2.screen.getByText('Hello world');

    expect(tooltip).toBeInTheDocument();

    _react2.fireEvent.mouseOut(tooltip);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('open initially, collapse on mouseout', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Hello world",
      isOpen: true
    }, _react["default"].createElement(_Button.Button, null, "Test")));

    var trigger = _react2.screen.getByText('Test');

    var tooltip = _react2.screen.queryByText('Hello world');

    runTimers();
    expect(tooltip).toBeVisible();

    _react2.fireEvent.mouseOut(trigger);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('supports styling props', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Hello world",
      width: "20rem",
      textAlign: "right"
    }, _react["default"].createElement(_Button.Button, null, "Test")));

    var trigger = _react2.screen.getByText('Test');

    _react2.fireEvent.mouseOver(trigger);

    var tooltip = _react2.screen.queryByText('Hello world');

    runTimers();
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveStyleRule('max-width: 20rem');
    expect(tooltip).toHaveStyleRule('text-align: right');

    _react2.fireEvent.mouseOut(trigger);

    runTimers();
  });
  test('Render props version works', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Hello world"
    }, function (props) {
      return _react["default"].createElement(_Button.Button, props, "Test");
    }));

    var trigger = _react2.screen.getByText('Test');

    _react2.fireEvent.mouseOver(trigger);

    var tooltip = _react2.screen.queryByText('Hello world');

    expect(tooltip).not.toBeVisible();
    runTimers();
    expect(tooltip).toBeVisible();

    _react2.fireEvent.mouseOut(trigger);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('nested in a Popover', function () {
    var mockHandlers = {
      onBlur: jest.fn(),
      onClick: jest.fn(),
      onFocus: jest.fn(),
      onMouseOut: jest.fn(),
      onMouseOver: jest.fn()
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Popover.Popover, {
      content: "Some popover"
    }, _react["default"].createElement(_Tooltip.Tooltip, {
      content: "Some tooltip"
    }, _react["default"].createElement(_Button.Button, mockHandlers, "Open"))));

    var button = _react2.screen.getByText('Open');

    _react2.fireEvent.focus(button);

    expect(mockHandlers.onFocus).toHaveBeenCalled();
    runTimers();
    expect(_react2.screen.getByText('Some tooltip')).toBeVisible();

    _react2.fireEvent.click(button);

    expect(_react2.screen.getByText('Some popover')).toBeVisible();
    expect(_react2.screen.queryByText('Some tooltip')).not.toBeInTheDocument();
    expect(mockHandlers.onClick).toHaveBeenCalled();

    _react2.fireEvent.mouseOut(button);

    expect(mockHandlers.onMouseOut).toHaveBeenCalled();

    _react2.fireEvent.mouseOver(button);

    expect(mockHandlers.onMouseOver).toHaveBeenCalled();
    runTimers();
    expect(_react2.screen.queryByText('Some tooltip')).not.toBeInTheDocument();

    _react2.fireEvent.blur(button);

    expect(mockHandlers.onBlur).toHaveBeenCalled();

    _react2.fireEvent.click(document);
  });
  test('with nested autoFocus input', function () {
    var AutoFocusInput = function AutoFocusInput() {
      var _useState = (0, _react.useState)(false),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          show = _useState2[0],
          setShow = _useState2[1];

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
        onClick: function onClick() {
          return setShow(true);
        }
      }, "Click"), show && _react["default"].createElement(_Tooltip.Tooltip, {
        content: "See what happens when you scroll",
        placement: "right"
      }, _react["default"].createElement("div", null, _react["default"].createElement("input", {
        type: "text",
        autoFocus: true
      }))));
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(AutoFocusInput, null));

    _react2.fireEvent.click(_react2.screen.getByText('Click'));

    runTimers();
    expect(_react2.screen.getByRole('tooltip')).toBeVisible();

    _react2.fireEvent.blur(_react2.screen.getByRole('textbox'));
  });
  test('disabled, no undefined className', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
      disabled: true,
      content: "Hello world"
    }, _react["default"].createElement(_Button.Button, null, "Test")));

    var button = _react2.screen.getByRole('button');

    expect(button).not.toHaveClass('undefined');
  });
});
//# sourceMappingURL=Tooltip.spec.js.map