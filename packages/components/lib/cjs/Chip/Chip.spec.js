"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Chip = require("./Chip");

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
});
//# sourceMappingURL=Chip.spec.js.map