"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _components = require("@looker/components");
var _react = require("@testing-library/react");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _react2 = _interopRequireDefault(require("react"));
var _testUtils = require("@looker/test-utils");
var _Field = require("./Field");

describe('Field tests', function () {
  it('renders a field with label', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var _renderWithTheme, container;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _renderWithTheme = (0, _testUtils.renderWithTheme)(_react2["default"].createElement(_Field.Field, {
            label: "Test Field",
            displayLabel: _react2["default"].createElement(_components.Text, null, "Test Field"),
            payload: {},
            onClick: _noop["default"]
          })), container = _renderWithTheme.container;
          expect(container).toBeVisible();
          _context.t0 = expect;
          _context.next = 5;
          return _react.screen.findByText('Test Field');
        case 5:
          _context.t1 = _context.sent;
          (0, _context.t0)(_context.t1).toBeVisible();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('should call onClick', function () {
    var onClick = jest.fn();
    (0, _testUtils.renderWithTheme)(_react2["default"].createElement(_Field.Field, {
      label: "Test Field",
      displayLabel: _react2["default"].createElement(_components.Text, null, "Test Field"),
      payload: {
        obj: 'hi'
      },
      onClick: onClick
    }));
    var field = _react.screen.getByText('Test Field');
    _react.fireEvent.click(field);
    expect(onClick).toHaveBeenCalledWith('Test Field', {
      obj: 'hi'
    });
  });
  it('should behave disabled', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var onClick, field, disabledText;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          onClick = jest.fn();
          (0, _testUtils.renderWithTheme)(_react2["default"].createElement(_Field.Field, {
            label: "Test Field",
            displayLabel: _react2["default"].createElement(_components.Text, null, "Test Field"),
            payload: {
              obj: 'hi'
            },
            onClick: onClick,
            disabled: "disabled"
          }));
          field = _react.screen.getByText('Test Field');
          _react.fireEvent.click(field);
          _react.fireEvent.mouseOver(field);
          disabledText = _react.screen.getByText('disabled');
          expect(disabledText.innerHTML).toBe('disabled');
          expect(onClick).toHaveBeenCalledTimes(0);

          _react.fireEvent.mouseOut(field);
          _context2.next = 11;
          return (0, _react.waitForElementToBeRemoved)(function () {
            return _react.screen.queryByText('disabled');
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=Field.spec.js.map