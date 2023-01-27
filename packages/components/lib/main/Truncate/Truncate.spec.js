"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Box = require("../Layout/Box2");
var _utils = require("../utils");
var _Truncate = require("./Truncate");

jest.mock('../utils/isOverflowing', function () {
  return {
    isOverflowing: jest.fn()
  };
});
var longLabel = 'This is a long label that should trigger truncation';
describe('Truncate', function () {
  test('Basic', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var trigger, tooltip;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          ;
          _utils.isOverflowing.mockImplementation(function () {
            return false;
          });
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Truncate.Truncate, null, "Hello world"));
          trigger = _react2.screen.getByText('Hello world');
          _react2.fireEvent.mouseOver(trigger);
          tooltip = _react2.screen.queryByRole('tooltip');
          expect(tooltip).not.toBeInTheDocument();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('Truncate active', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var trigger, tooltip;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ;
          _utils.isOverflowing.mockImplementation(function () {
            return true;
          });
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box2, {
            width: "5rem"
          }, _react["default"].createElement(_Truncate.Truncate, null, longLabel)));
          trigger = _react2.screen.getAllByText(longLabel)[0];
          _react2.fireEvent.mouseOver(trigger);
          tooltip = _react2.screen.getAllByText(longLabel)[1];
          _context2.next = 8;
          return (0, _react2.waitFor)(function () {
            return expect(tooltip).toBeVisible();
          });
        case 8:
          _react2.fireEvent.mouseOut(tooltip);
          _context2.next = 11;
          return (0, _react2.waitForElementToBeRemoved)(function () {
            return _react2.screen.queryByRole('tooltip');
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('Truncate detail', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    var trigger, tooltip;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          ;
          _utils.isOverflowing.mockImplementation(function () {
            return true;
          });
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Truncate.Truncate, {
            description: "description text"
          }, "Hello World"));
          trigger = _react2.screen.getByText('Hello World');
          _react2.fireEvent.mouseOver(trigger);
          tooltip = _react2.screen.getByText('description text');
          _context3.next = 8;
          return (0, _react2.waitFor)(function () {
            return expect(tooltip).toBeVisible();
          });
        case 8:
          _react2.fireEvent.mouseOut(tooltip);
          _context3.next = 11;
          return (0, _react2.waitForElementToBeRemoved)(function () {
            return _react2.screen.queryByRole('tooltip');
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
});
//# sourceMappingURL=Truncate.spec.js.map