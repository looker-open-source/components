"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _InputFiltersChip = require("./InputFiltersChip");

describe('InputFiltersChip', function () {
  var filter = {
    field: 'role',
    formatValue: function formatValue(value) {
      return value.toUpperCase();
    },
    options: ['user', 'group-admin', 'admin', 'pizza'],
    value: 'user'
  };
  var onDelete = jest.fn();
  test('renders', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputFiltersChip.InputFiltersChip, {
      filter: filter,
      onDelete: onDelete
    }));
    expect(_react2.screen.getByText('role:')).toBeInTheDocument();
  });
  test('onClick', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputFiltersChip.InputFiltersChip, {
      filter: filter,
      onClick: onClick,
      onDelete: onDelete
    }));

    var filterBy = _react2.screen.queryByText('role:');

    filterBy && _react2.fireEvent.click(filterBy);
    expect(filterBy).toBeInTheDocument();
    expect(onClick).toBeCalled();

    _react2.fireEvent.click(document);
  });
  test('formats value if formatValue is passed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputFiltersChip.InputFiltersChip, {
      filter: filter,
      onDelete: onDelete
    }));

    var filterBy = _react2.screen.queryByText('USER');

    expect(filterBy).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
});
//# sourceMappingURL=InputFiltersChip.spec.js.map