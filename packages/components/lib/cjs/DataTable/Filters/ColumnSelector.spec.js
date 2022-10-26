"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _columns = require("../../fixtures/DataTable/columns");

var _ColumnSelector = require("./ColumnSelector");

describe('ColumnSelector', function () {
  test('render', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ColumnSelector.ColumnSelector, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: jest.fn()
    }));
    expect(_react2.screen.getByText('Select columns to display')).toBeInTheDocument();
  });
  test('open, select column, apply', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ColumnSelector.ColumnSelector, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Select columns to display'));

    expect(_react2.screen.getByText('Inventory')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByLabelText('Inventory'));

    _react2.fireEvent.click(_react2.screen.getByText('Apply'));

    expect(onChange).toBeCalledWith(['inventory']);

    _react2.fireEvent.click(document);
  });
  test('cancel', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ColumnSelector.ColumnSelector, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Select columns to display'));

    expect(_react2.screen.getByText('Inventory')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByLabelText('Inventory'));

    _react2.fireEvent.click(_react2.screen.getByText('Cancel'));

    expect(onChange).toBeCalledTimes(0);

    _react2.fireEvent.click(document);
  });
  test('Select All', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ColumnSelector.ColumnSelector, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Select columns to display'));

    _react2.fireEvent.click(_react2.screen.getByText('Select All'));

    _react2.fireEvent.click(_react2.screen.getByText('Apply'));

    expect(onChange).toBeCalledWith(['name', 'status', 'inventory', 'color', 'description', 'origin', 'calories', 'fat', 'protein', 'calcium']);

    _react2.fireEvent.click(document);
  });
  test('Select None', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ColumnSelector.ColumnSelector, {
      columns: _columns.columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Select columns to display'));

    _react2.fireEvent.click(_react2.screen.getByText('Select All'));

    _react2.fireEvent.click(_react2.screen.getByText('Select None'));

    _react2.fireEvent.click(_react2.screen.getByText('Apply'));

    expect(onChange).toBeCalledWith([]);

    _react2.fireEvent.click(document);
  });
});
//# sourceMappingURL=ColumnSelector.spec.js.map