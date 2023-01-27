"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _components = require("@looker/components");
var _react = require("@testing-library/react");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _react2 = _interopRequireDefault(require("react"));
var _testUtils = require("@looker/test-utils");
var _Section = require("./Section");

describe('Section tests', function () {
  it('should render a Section', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var _renderWithTheme, container;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _renderWithTheme = (0, _testUtils.renderWithTheme)(_react2["default"].createElement(_Section.Section, {
            id: "1",
            title: _react2["default"].createElement(_components.Text, null, "Section Title"),
            isOpen: true,
            detail: "This is a detail",
            onClick: _noop["default"]
          })), container = _renderWithTheme.container;
          expect(container).toBeVisible();
          _context.t0 = expect;
          _context.next = 5;
          return _react.screen.findByText('Section Title');
        case 5:
          _context.t1 = _context.sent;
          (0, _context.t0)(_context.t1).toBeVisible();
          _context.t2 = expect;
          _context.next = 10;
          return _react.screen.findByText('This is a detail');
        case 10:
          _context.t3 = _context.sent;
          (0, _context.t2)(_context.t3).toBeVisible();
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('should open the section', function () {
    var onClick = jest.fn();
    (0, _testUtils.renderWithTheme)(_react2["default"].createElement(_Section.Section, {
      id: "1",
      title: _react2["default"].createElement(_components.Text, null, "Section Title"),
      isOpen: false,
      detail: "This is a detail",
      onClick: onClick
    }, _react2["default"].createElement(_components.Text, null, "Inside of Section")));
    var section = _react.screen.getByText('Section Title');
    _react.fireEvent.click(section);
    expect(onClick).toHaveBeenCalledWith({
      isOpen: true,
      id: '1'
    });
  });
  it('should show the sections children if open', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0, _testUtils.renderWithTheme)(_react2["default"].createElement(_Section.Section, {
            id: "1",
            title: _react2["default"].createElement(_components.Text, null, "Section Title"),
            isOpen: true,
            detail: "This is a detail",
            onClick: _noop["default"]
          }, _react2["default"].createElement(_components.Text, null, "Inside of Section")));
          _context2.t0 = expect;
          _context2.next = 4;
          return _react.screen.findByText('Inside of Section');
        case 4:
          _context2.t1 = _context2.sent;
          (0, _context2.t0)(_context2.t1).toBeVisible();
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=Section.spec.js.map