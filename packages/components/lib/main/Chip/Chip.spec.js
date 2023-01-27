"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Chip = require("./Chip");

jest.mock('../utils/isOverflowing', function () {
  return {
    isOverflowing: function isOverflowing() {
      return true;
    }
  };
});
describe('Chip', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Chip.Chip, null, "chip"));
    expect(_react2.screen.getByText('chip')).toBeInTheDocument();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Chip.Chip, {
      disabled: true
    }, "chip"));
    expect(_react2.screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('Chip accepts a prefix and renders it with correct style', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Chip.Chip, {
      prefix: "role"
    }, "admin"));
    expect(_react2.screen.getByText(/\brole\b/)).toHaveStyleRule('font-weight: 400');
  });
  test('onDelete works correctly', function () {
    var onDeleteTrigger = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Chip.Chip, {
      onDelete: onDeleteTrigger,
      "data-testid": "chip"
    }, "clickable"));
    _react2.fireEvent.click(_react2.screen.getByRole('button'));
    expect(onDeleteTrigger).toHaveBeenCalledTimes(1);
    var chip = _react2.screen.getByTestId('chip');
    _react2.fireEvent.keyDown(chip, {
      key: 'Backspace'
    });
    expect(onDeleteTrigger).toHaveBeenCalledTimes(2);
  });
  test('truncation', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var chip;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Chip.Chip, null, "truncate me"));
          chip = _react2.screen.getByText('truncate me');
          _react2.fireEvent.mouseOver(chip);
          expect(_react2.screen.getByRole('tooltip')).toHaveTextContent('truncate me');
          _react2.fireEvent.mouseOut(chip);
          _context.next = 7;
          return (0, _react2.waitForElementToBeRemoved)(function () {
            return _react2.screen.queryByRole('tooltip');
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
//# sourceMappingURL=Chip.spec.js.map