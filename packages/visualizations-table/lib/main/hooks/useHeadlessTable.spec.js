"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _reactHooks = require("@testing-library/react-hooks");
var _react2 = require("@testing-library/react");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _reactTable = require("@tanstack/react-table");
var _useHeadlessTable = require("./useHeadlessTable");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var wrapper = function wrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, children);
};
it('configures table object', function () {
  var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _useHeadlessTable.useHeadlessTable)({
        data: _visualizationsAdapters.mockData,
        fields: _visualizationsAdapters.mockFields,
        config: _visualizationsAdapters.mockTableConfig
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook.result;
  var tableRows = result.current.table.getRowModel().rows;
  var firstRow = tableRows[0].getVisibleCells();
  var RowComponent = function RowComponent() {
    return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, firstRow.map(function (_ref2, i) {
      var column = _ref2.column,
        getContext = _ref2.getContext;
      return _react["default"].createElement("td", {
        key: i
      }, (0, _reactTable.flexRender)(column.columnDef.cell, getContext()));
    }))));
  };
  (0, _react2.render)(_react["default"].createElement(RowComponent, null));
  var tableCells = _react2.screen.getAllByRole('cell');
  expect(tableCells.map(function (cell) {
    return cell.textContent;
  })).toEqual(['2019-12-22', 'California', '3087', '1088']);
});
it('Handles table sorting state', function () {
  var _renderHook2 = (0, _reactHooks.renderHook)(function () {
      return (0, _useHeadlessTable.useHeadlessTable)({
        data: _visualizationsAdapters.mockData,
        fields: _visualizationsAdapters.mockFields,
        config: _visualizationsAdapters.mockTableConfig
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook2.result,
    rerender = _renderHook2.rerender;

  expect(result.current.sorting).toEqual([{
    id: 'orders.count',
    desc: true
  }]);
  (0, _reactHooks.act)(function () {
    result.current.handleTableSort({
      id: 'orders.count',
      column: {
        id: 'orders.count',
        getCanSort: function getCanSort() {
          return true;
        }
      }
    }, {
      shiftKey: false
    });
  });
  rerender();

  expect(result.current.sorting).toEqual([{
    id: 'orders.count',
    desc: false
  }]);
});
it('Handles table with row totals', function () {
  var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return (0, _useHeadlessTable.useHeadlessTable)({
        data: _visualizationsAdapters.mockDataWithRowTotals,
        fields: _visualizationsAdapters.mockFieldsRowTotals,
        config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
          show_row_totals: true
        })
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook3.result;
  var tableRows = result.current.table.getRowModel().rows;
  var firstRow = tableRows[0].getVisibleCells();
  var RowComponent = function RowComponent() {
    return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, firstRow.map(function (_ref3, i) {
      var column = _ref3.column,
        getContext = _ref3.getContext;
      return _react["default"].createElement("td", {
        key: i
      }, (0, _reactTable.flexRender)(column.columnDef.cell, getContext()));
    }))));
  };
  (0, _react2.render)(_react["default"].createElement(RowComponent, null));
  var tableCells = _react2.screen.getAllByRole('cell');
  expect(tableCells.map(function (cell) {
    return cell.textContent;
  })).toEqual(['', '', '89', '39', '128']);
});
it('Hides row totals when show_row_totals is false', function () {
  var _renderHook4 = (0, _reactHooks.renderHook)(function () {
      return (0, _useHeadlessTable.useHeadlessTable)({
        data: _visualizationsAdapters.mockDataWithRowTotals,
        fields: _visualizationsAdapters.mockFieldsRowTotals,
        config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
          show_row_totals: false
        })
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook4.result;
  var tableRows = result.current.table.getRowModel().rows;
  var firstRow = tableRows[0].getVisibleCells();
  var RowComponent = function RowComponent() {
    return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, firstRow.map(function (_ref4, i) {
      var column = _ref4.column,
        getContext = _ref4.getContext;
      return _react["default"].createElement("td", {
        key: i
      }, (0, _reactTable.flexRender)(column.columnDef.cell, getContext()));
    }))));
  };
  (0, _react2.render)(_react["default"].createElement(RowComponent, null));
  var tableCells = _react2.screen.getAllByRole('cell');
  expect(tableCells.map(function (cell) {
    return cell.textContent;
  })).toEqual(['', '', '89', '39']);
});
it('controls column visibility based on series visibility', function () {
  var _renderHook5 = (0, _reactHooks.renderHook)(function () {
      return (0, _useHeadlessTable.useHeadlessTable)({
        data: _visualizationsAdapters.mockData,
        fields: _visualizationsAdapters.mockFields,
        config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
          series: {
            'orders.count': {
              visible: true
            },
            'orders.average_total_amount_of_order_usd': {
              visible: false
            },
            'orders.created_date': {
              visible: true
            },
            'users.state': {
              visible: true
            }
          }
        })
      });
    }, {
      wrapper: wrapper
    }),
    result = _renderHook5.result;
  var tableRows = result.current.table.getRowModel().rows;
  var firstRow = tableRows[0].getVisibleCells();
  var RowComponent = function RowComponent() {
    return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, firstRow.map(function (_ref5, i) {
      var column = _ref5.column,
        getContext = _ref5.getContext;
      return _react["default"].createElement("td", {
        key: i
      }, (0, _reactTable.flexRender)(column.columnDef.cell, getContext()));
    }))));
  };
  (0, _react2.render)(_react["default"].createElement(RowComponent, null));
  var tableCells = _react2.screen.getAllByRole('cell');
  expect(tableCells.map(function (cell) {
    return cell.textContent;
  })).toEqual(['2019-12-22', 'California', '3087']);
});
//# sourceMappingURL=useHeadlessTable.spec.js.map