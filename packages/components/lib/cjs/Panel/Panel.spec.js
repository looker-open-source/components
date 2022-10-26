"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("@testing-library/jest-dom/extend-expect");

var _react = require("@testing-library/react");

require("jest-styled-components");

var _react2 = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _Panel = require("./Panel.stories");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var globalConsole = global.console;

var runTimers = function runTimers() {
  return (0, _react.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

beforeEach(function () {
  jest.useFakeTimers();
  global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
    error: jest.fn(),
    warn: jest.fn()
  });
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  global.console = globalConsole;
});
describe('Panel', function () {
  var UsePanelHook = function UsePanelHook() {
    var _useState = (0, _react2.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isOpen = _useState2[0],
        setOpen = _useState2[1];

    var open = function open() {
      return setOpen(true);
    };

    var canClose = function canClose() {
      return true;
    };

    var _usePanel = (0, _.usePanel)({
      canClose: canClose,
      content: 'Panel content',
      direction: 'left',
      isOpen: isOpen,
      setOpen: setOpen,
      title: 'Panel Hook'
    }),
        panel = _usePanel.panel;

    return _react2["default"].createElement(_react2["default"].Fragment, null, panel, _react2["default"].createElement("ul", null, _react2["default"].createElement("li", {
      onClick: open
    }, "Option A"), _react2["default"].createElement("li", null, "Option B")));
  };

  var ControlledPanel = function ControlledPanel() {
    var _useState3 = (0, _react2.useState)(false),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        option = _useState4[0],
        setOption = _useState4[1];

    var toggleOption = function toggleOption() {
      return setOption(!option);
    };

    return _react2["default"].createElement(_.Panels, null, _react2["default"].createElement("ul", null, _react2["default"].createElement("li", {
      onClick: toggleOption
    }, "Option 1"), _react2["default"].createElement("li", null, "Option 2"), _react2["default"].createElement("li", null, "Option 3")), _react2["default"].createElement(_.Panel, {
      isOpen: option,
      setOpen: setOption,
      direction: "left",
      title: "return to main option",
      content: _react2["default"].createElement("ul", null, _react2["default"].createElement("li", null, "Panel 1"), _react2["default"].createElement("li", null, "Panel 2"), _react2["default"].createElement("li", null, "Panel 3"))
    }));
  };

  var UncontrolledPanel = function UncontrolledPanel() {
    return _react2["default"].createElement(_.Panels, null, _react2["default"].createElement("ul", null, _react2["default"].createElement(_.Panel, {
      content: 'content from the right edge...',
      direction: "right",
      title: "Right"
    }, _react2["default"].createElement("li", null, "Right")), _react2["default"].createElement(_.Panel, {
      title: "Left",
      content: 'content from the left edge...'
    }, _react2["default"].createElement("li", null, "Left")), _react2["default"].createElement(_.Panel, {
      content: "My neat dialog",
      title: "render prop"
    }, function (panelProps) {
      return _react2["default"].createElement("li", panelProps, "render prop");
    })));
  };

  test('Panel works properly when direction is equal to right', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(UncontrolledPanel, null));

    var right = _react.screen.getByText('Right');

    expect(right).toBeInTheDocument();

    _react.fireEvent.click(right);

    expect(_react.screen.getByText('content from the right edge...')).toBeInTheDocument();
  });
  test('uncontrolled Panel displays content prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(UncontrolledPanel, null));

    var left = _react.screen.getByText('Left');

    expect(left).toBeInTheDocument();

    _react.fireEvent.click(left);

    expect(_react.screen.getByText('content from the left edge...')).toBeInTheDocument();
  });
  test('controlled Panel displays content', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(ControlledPanel, null));

    var liElement = _react.screen.getByText('Option 1');

    expect(liElement).toBeInTheDocument();

    _react.fireEvent.click(liElement);

    expect(_react.screen.getByText('Panel 1')).toBeInTheDocument();
    expect(_react.screen.getByText('Panel 3')).toBeInTheDocument();
  });
  test('returns to previous display if title prop is clicked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(ControlledPanel, null));

    var liElement = _react.screen.getByText('Option 1');

    expect(liElement).toBeInTheDocument();

    _react.fireEvent.click(liElement);

    expect(_react.screen.getByText('Panel 1')).toBeInTheDocument();

    var returnToExplore = _react.screen.getByText('return to main option');

    _react.fireEvent.click(returnToExplore);

    expect(_react.screen.getByText('Option 1')).toBeInTheDocument();
    expect(_react.screen.getByText('Option 2')).toBeInTheDocument();
  });
  test('usePanel hook works as expected', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(UsePanelHook, null));
    expect(_react.screen.getByText('Option A')).toBeInTheDocument();
    expect(_react.screen.getByText('Option B')).toBeInTheDocument();

    _react.fireEvent.click(_react.screen.getByText('Option A'));

    expect(_react.screen.getByText('Panel content')).toBeInTheDocument();

    _react.fireEvent.click(_react.screen.getByText('Close Panel Hook'));

    expect(_react.screen.getByText('Option A')).toBeInTheDocument();
  });
  test('with no content fails', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(UncontrolledPanel, null));
    expect(_react.screen.getByText('render prop')).toBeInTheDocument();

    _react.fireEvent.click(_react.screen.getByText('render prop'));

    expect(_react.screen.getByText('My neat dialog')).toBeInTheDocument();
  });
  test('triggers console.warn if no children are passed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Panel, null));
    expect(console.warn).toHaveBeenCalled();
  });
  test('hidden content under panel is not reachable via keyboard nav', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Panel.Nested, null));

    var listItem = _react.screen.getByText('option A');

    _react.fireEvent.click(listItem);

    runTimers();
    expect(listItem).not.toBeVisible();

    var nestedPanelButton = _react.screen.getByText('Open nested panel');

    expect(nestedPanelButton.closest('[data-panel]')).toHaveStyle('visibility: visible;');

    _react.fireEvent.click(nestedPanelButton);

    runTimers();
    expect(listItem).not.toBeVisible();
    expect(nestedPanelButton).not.toBeVisible();

    var closeButton = _react.screen.getByRole('button', {
      name: 'Close Nested'
    });

    expect(closeButton.closest('[data-panel]')).toHaveStyle('visibility: visible;');
  });
  test('onAfterOpen, onAfterClose', function () {
    jest.useFakeTimers();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Panel.AnimationCallbacks, null));

    var button = _react.screen.getByRole('button');

    _react.fireEvent.click(button);

    var input = _react.screen.getByRole('textbox');

    expect(input).not.toHaveFocus();
    (0, _react.act)(function () {
      jest.runOnlyPendingTimers();
    });
    expect(input).toHaveFocus();

    var closeButton = _react.screen.getByRole('button', {
      name: 'Close Animation Callbacks'
    });

    _react.fireEvent.click(closeButton);

    expect(_react.screen.queryByText('Panel closed')).not.toBeInTheDocument();
    (0, _react.act)(function () {
      jest.runOnlyPendingTimers();
    });
    expect(_react.screen.queryByText('Panel closed')).toBeVisible();
    jest.useRealTimers();
  });
});
//# sourceMappingURL=Panel.spec.js.map