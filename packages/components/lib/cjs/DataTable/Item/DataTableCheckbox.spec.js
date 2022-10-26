"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DataTableCheckbox = require("./DataTableCheckbox");

describe('DataTableCheckbox', function () {
  test('Renders checked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      checked: true
    }));

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });
  test('Renders unchecked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, null));

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });
  test('Renders disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      disabled: true
    }));

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
  });
  test('Calls onChange callback', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      onChange: onChange
    }));

    var checkbox = _react2.screen.getByRole('checkbox');

    _react2.fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(2);
  });
  test('Renders aria-label when checked if id = headerId', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      id: "headerId",
      checked: true
    }));

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-label', 'Select none');
  });
  test('Renders aria-label when unchecked if id = headerId', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      id: "headerId"
    }));

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-label', 'Select all rows');
  });
  test('no aria-label if id != headerId', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      id: "idValue"
    }));

    var checkbox = _react2.screen.getByRole('checkbox');

    expect(checkbox).not.toHaveAttribute('aria-label');
  });
  test('Renders aria-labelledby with primary column value passed as id', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, {
      id: "primaryColumn"
    })),
        container = _renderWithTheme.container;

    expect(container.firstChild).toHaveAttribute('aria-labelledby', 'rowheader-primaryColumn');
  });
});
//# sourceMappingURL=DataTableCheckbox.spec.js.map