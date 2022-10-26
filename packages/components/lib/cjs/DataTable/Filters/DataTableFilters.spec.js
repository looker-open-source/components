"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Form = require("../../Form");

var _columns = require("../../fixtures/DataTable/columns");

var _filters = require("../../fixtures/filters");

var _DataTableFilters = require("./DataTableFilters");

describe('DataTableFilters', function () {
  test('render and displays InputFilter', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableFilters.DataTableFilters, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: jest.fn()
    }, _react["default"].createElement(_Form.InputFilters, {
      filters: _filters.filters,
      onChange: jest.fn()
    })));
    expect(_react2.screen.getByPlaceholderText('Filter List')).toBeInTheDocument();
  });
  test('render display columns icon', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DataTableFilters.DataTableFilters, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: jest.fn()
    }, _react["default"].createElement(_Form.InputFilters, {
      filters: _filters.filters,
      onChange: jest.fn()
    })));
    expect(_react2.screen.getByText('Select columns to display')).toBeInTheDocument();
  });
});
//# sourceMappingURL=DataTableFilters.spec.js.map