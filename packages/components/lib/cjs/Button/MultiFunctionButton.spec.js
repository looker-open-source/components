"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _MultiFunctionButton = require("./MultiFunctionButton");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CopyToClipboard = function CopyToClipboard() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      change = _useState2[0],
      setChange = _useState2[1];

  var handleSwap = function handleSwap() {
    setChange(true);
    setTimeout(function () {
      return setChange(false);
    }, 1500);
  };

  return _react["default"].createElement(_MultiFunctionButton.MultiFunctionButton, {
    alternate: _react["default"].createElement("button", null, "Copied!"),
    swap: change
  }, _react["default"].createElement("button", {
    onClick: handleSwap
  }, "Copy to Clipboard"));
};

describe('MultiFunctionButton', function () {
  test('render children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(CopyToClipboard, null));
    expect(_react2.screen.getByText('Copy to Clipboard')).toBeInTheDocument();
  });
  test('if swap is false alternate button should display', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MultiFunctionButton.MultiFunctionButton, {
      alternate: _react["default"].createElement("button", null, "Copied!"),
      swap: false
    }, _react["default"].createElement("button", null, "Copy to Clipboard")));
    expect(_react2.screen.getByText('Copied!')).toBeInTheDocument();
  });
  test('alternate button is displayed when swap is true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(CopyToClipboard, null));

    var button = _react2.screen.getByText('Copy to Clipboard');

    _react2.fireEvent.click(button);

    expect(_react2.screen.getByText('Copied!')).toBeInTheDocument();
  });
  test('component switch focus based on the displayed button', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(CopyToClipboard, null));

    var button = _react2.screen.getByText('Copy to Clipboard');

    expect(button).not.toHaveFocus();
    button.focus();

    _react2.fireEvent.click(button);

    var alternate = _react2.screen.getByText('Copied!');

    expect(alternate).toHaveFocus();
  });
});
describe('MultiFunctionButton focus returns to children', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('after swap goes back to false', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(CopyToClipboard, null));

    var button = _react2.screen.getByText('Copy to Clipboard');

    button.focus();

    _react2.fireEvent.click(button);

    var alternate = _react2.screen.getByText('Copied!');

    expect(alternate).toHaveFocus();
    (0, _react2.act)(function () {
      jest.runOnlyPendingTimers();
    });
    expect(button).toHaveFocus();
  });
});
//# sourceMappingURL=MultiFunctionButton.spec.js.map