"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ModalHeader = require("./ModalHeader");

describe('ModalHeader', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalHeader.ModalHeader, null, "Heading"));
    expect(_react2.screen.getByText('Heading')).toBeInTheDocument();
  });
  test('has aria-label', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalHeader.ModalHeader, {
              "aria-label": "ARIA label"
            }, "Heading"));
            _context.t0 = expect;
            _context.next = 4;
            return _react2.screen.findByLabelText('ARIA label');

          case 4:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1).toBeInTheDocument();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test("detail as ReactNode", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalHeader.ModalHeader, {
      detail: _react["default"].createElement("button", null, "x")
    }, "Header"));
    expect(_react2.screen.getByText('x')).toBeInTheDocument();
  });
  test("detail has marginY", function () {
    var _screen$queryByText, _screen$queryByText2;

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalHeader.ModalHeader, {
      detail: _react["default"].createElement("button", null, "x")
    }, "Header"));
    expect((_screen$queryByText = _react2.screen.queryByText('x')) === null || _screen$queryByText === void 0 ? void 0 : _screen$queryByText.closest('div')).toHaveStyle('margin-top: -0.5rem');
    expect((_screen$queryByText2 = _react2.screen.queryByText('x')) === null || _screen$queryByText2 === void 0 ? void 0 : _screen$queryByText2.closest('div')).toHaveStyle('margin-bottom: -0.5rem');
  });
});
//# sourceMappingURL=ModalHeader.spec.js.map