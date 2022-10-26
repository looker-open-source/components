"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DataTableAction = require("../Item/DataTableAction");

var _Link = require("../../Link");

var _useDataTableSortManager = require("./useDataTableSortManager");

describe('useDataTableSortManager', function () {
  var actions = function actions() {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DataTableAction.DataTableAction, {
      onClick: function onClick() {
        return alert("Ordered!!");
      }
    }, "Order"), _react["default"].createElement(_DataTableAction.DataTableAction, {
      onClick: function onClick() {
        return alert('Mmmm...');
      }
    }, "Make Grilled Cheese"), _react["default"].createElement(_DataTableAction.DataTableAction, {
      onClick: function onClick() {
        return alert('Delete');
      }
    }, "Delete"));
  };

  var columns = [{
    hide: true,
    id: 'calories',
    title: 'Calories',
    type: 'number'
  }, {
    canSort: true,
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    canSort: true,
    id: 'name',
    title: 'Name',
    type: 'string'
  }, {
    canSort: true,
    id: 'type',
    title: 'Type',
    type: 'string'
  }];
  var data = [{
    calories: 101,
    id: 1,
    name: 'Cheddar',
    type: 'hard, artisan, processed'
  }, {
    calories: 102,
    id: 2,
    name: 'Brie',
    type: 'soft, processed'
  }, {
    calories: 103,
    id: 3,
    name: _react["default"].createElement("a", {
      href: "https://components.looker.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Gouda"),
    type: 'semi-hard, artisan, brined'
  }, {
    calories: 104,
    id: 4,
    name: _react["default"].createElement(_Link.Link, {
      href: "https://components.looker.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "American"),
    type: 'semi-soft, processed'
  }];
  test('returns a DataTable', function () {
    var Test = function Test() {
      return (0, _useDataTableSortManager.useDataTableSortManager)('Caption...', data, columns, actions);
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('ID')).toBeInTheDocument();
    expect(_react2.screen.getByText('Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Type')).toBeInTheDocument();
    expect(_react2.screen.getByText('1')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cheddar')).toBeInTheDocument();
    expect(_react2.screen.getByText('hard, artisan, processed')).toBeInTheDocument();
  });
  test('returns a DataTable caption', function () {
    var Test = function Test() {
      return (0, _useDataTableSortManager.useDataTableSortManager)('Caption...', data, columns, actions);
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByRole('table')).toHaveAttribute('aria-label', 'Caption...');
  });
  test('onSort sorts elements', function () {
    var Test = function Test() {
      return (0, _useDataTableSortManager.useDataTableSortManager)('Caption...', data, columns, actions);
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));

    var sort = _react2.screen.getByText('ID').closest('th');

    expect(sort).not.toBeNull();
    expect(sort).toHaveAttribute('aria-sort', 'none');

    _react2.fireEvent.click(_react2.screen.getByText('ID'));

    expect(sort).toHaveAttribute('aria-sort', 'ascending');

    _react2.fireEvent.click(_react2.screen.getByText('ID'));

    expect(sort).toHaveAttribute('aria-sort', 'descending');
  });
  test('DataTableItem onClick behaves as expected', function () {
    var onClickMock = jest.fn();

    var Test = function Test() {
      return (0, _useDataTableSortManager.useDataTableSortManager)('Caption...', data, columns, actions, onClickMock);
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));

    var cheddarCell = _react2.screen.getByText('Cheddar');

    expect(cheddarCell).toBeInTheDocument();

    _react2.fireEvent.click(cheddarCell);

    expect(onClickMock).toHaveBeenCalled();
  });
});
//# sourceMappingURL=useDataTableSortManager.spec.js.map