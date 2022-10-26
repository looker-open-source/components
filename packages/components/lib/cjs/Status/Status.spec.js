"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Tooltip = require("../Tooltip");

var _Status = require("./Status");

describe('Status', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Status.Status, {
      "data-testid": "status"
    }));
    expect(_react2.screen.getByTestId('status')).toHaveStyle('color: rgb(113, 118, 122)');
  });
  test('critical Status', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Status.Status, {
      intent: "critical"
    }));
    expect(_react2.screen.getByTitle('Error').parentElement).toHaveStyle('color: rgb(204, 31, 54)');
  });
  test('inform', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Status.Status, {
      intent: "inform"
    }));
    expect(_react2.screen.getByTitle('Inform').parentElement).toHaveStyle('color: rgb(0, 135, 225)');
  });
  test('neutral', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Status.Status, {
      "data-testid": "neutral-icon",
      intent: "neutral"
    }));
    expect(_react2.screen.getByTestId('neutral-icon')).toHaveStyle('color: rgb(113, 118, 122)');
  });
  test('positive', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Status.Status, {
      intent: "positive"
    }));
    expect(_react2.screen.getByTitle('Success').parentElement).toHaveStyle('color: rgb(36, 178, 95)');
  });
  test('warn', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Status.Status, {
      intent: "warn"
    }));
    expect(_react2.screen.getByTitle('Warning').parentElement).toHaveStyle('color: rgb(255, 168, 0)');
  });
  test('wrapping in tooltip disable intent title', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
              content: "Meh"
            }, _react["default"].createElement(_Status.Status, {
              "data-testid": "status",
              title: "Gone gone"
            })));

            _react2.fireEvent.mouseEnter(_react2.screen.getByTestId('status'));

            _context.next = 4;
            return (0, _react2.waitFor)(function () {
              expect(_react2.screen.queryByRole('tooltip', {
                name: 'Gone Gone'
              })).not.toBeInTheDocument();
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=Status.spec.js.map