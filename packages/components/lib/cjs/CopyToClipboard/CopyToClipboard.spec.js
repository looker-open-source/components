"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _Button = require("../Button");

var _CopyToClipboard = require("./CopyToClipboard");

var CopyToClipboardComponent = function CopyToClipboardComponent() {
  var content = 'here is some text to be copied';
  return _react2["default"].createElement(_CopyToClipboard.CopyToClipboard, {
    content: content
  });
};

describe('CopyToClipboard', function () {
  beforeAll(function () {
    Object.defineProperty(document, 'execCommand', {
      value: jest.fn()
    });
  });
  it('renders the CopyToClipboard', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(CopyToClipboardComponent, null));
    expect(_react.screen.getByText('Copy to Clipboard')).toBeVisible();
  });
  it('renders the CopyToClipboard with different string values as children and success', function () {
    var content = 'here is some text to be copied';
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_CopyToClipboard.CopyToClipboard, {
      content: content,
      success: "it was copied"
    }, "copy something"));

    var copyButton = _react.screen.getByText('copy something');

    expect(copyButton).toBeVisible();

    _react.fireEvent.click(copyButton);

    expect(_react.screen.getByText('it was copied')).toBeVisible();
  });
  it('renders the CopyToClipboard with different components as children and success', function () {
    var content = 'here is some text to be copied';
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_CopyToClipboard.CopyToClipboard, {
      content: content,
      success: _react2["default"].createElement(_Button.Button, null, "Success")
    }, _react2["default"].createElement(_Button.Button, null, "Copy stuff")));

    var copyButton = _react.screen.getByText('Copy stuff');

    expect(copyButton).toBeVisible();

    _react.fireEvent.click(copyButton);

    expect(_react.screen.getByText('Success')).toBeVisible();
  });
  it('transitions from copy to copied state and back when clicked', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var button;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            jest.useFakeTimers();
            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(CopyToClipboardComponent, null));
            button = _react.screen.getByText('Copy to Clipboard');

            _react.fireEvent.click(button);

            expect(_react.screen.getByText('Copied')).toBeVisible();
            (0, _react.act)(function () {
              jest.runOnlyPendingTimers();
            });
            expect(_react.screen.getByText('Copy to Clipboard')).toBeVisible();
            jest.useRealTimers();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('copies the refs textarea content on copy click', function () {
    jest.spyOn(document, 'execCommand');
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(CopyToClipboardComponent, null));

    var button = _react.screen.getByText('Copy to Clipboard');

    _react.fireEvent.click(button);

    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
//# sourceMappingURL=CopyToClipboard.spec.js.map