"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableLayout = exports.DataTable = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _BulkActions = require("./BulkActions");

var _DataTableContext = require("./DataTableContext");

var _DataTableFilters = require("./Filters/DataTableFilters");

var _Table = require("./Table");

var _allItemsSelected = require("./utils/allItemsSelected");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTableLayout = function DataTableLayout(props) {
  var bulk = props.bulk,
      className = props.className,
      caption = props.caption,
      columns = props.columns,
      filterInput = props.filters,
      explicitFirstColumnStuck = props.firstColumnStuck,
      onSort = props.onSort,
      select = props.select;
  var columnsVisibleDefault = columns.filter(function (c) {
    return c.hide === false;
  }).map(function (c) {
    return c.id;
  });

  var _useState = (0, _react.useState)(columnsVisibleDefault),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      columnsVisible = _useState2[0],
      setColumnsVisible = _useState2[1];

  var columnsDisplayState = columns.map(function (c) {
    return c.hide === undefined || columnsVisible.includes(c.id);
  });
  var firstColumnStuck = Boolean(select);

  if (columnsDisplayState[0] === false) {
    firstColumnStuck = false;
  } else if (explicitFirstColumnStuck !== undefined) {
    firstColumnStuck = explicitFirstColumnStuck;
  }

  var context = {
    allSelected: (0, _allItemsSelected.allItemsSelected)(select),
    columns: columns,
    columnsDisplayState: columnsDisplayState,
    onSort: onSort,
    select: select
  };

  var filters = filterInput && _react["default"].createElement(_DataTableFilters.DataTableFilters, {
    columns: columns,
    columnsVisible: columnsVisible,
    onColumnVisibilityChange: setColumnsVisible
  }, filterInput);

  return _react["default"].createElement(_DataTableContext.DataTableContext.Provider, {
    value: context
  }, _react["default"].createElement("div", {
    className: className
  }, filters, bulk && select && select.selectedItems.length > 0 && _react["default"].createElement(_BulkActions.BulkActions, bulk), _react["default"].createElement(_Table.Table, (0, _extends2["default"])({}, props, {
    caption: caption,
    columns: columns,
    columnsVisible: columnsVisible,
    firstColumnStuck: firstColumnStuck
  }))));
};

exports.DataTableLayout = DataTableLayout;
var DataTable = (0, _styledComponents["default"])(DataTableLayout).withConfig({
  displayName: "DataTable",
  componentId: "sc-mgms8t-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
exports.DataTable = DataTable;
//# sourceMappingURL=DataTable.js.map