"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectNoSelectedItemsOrPageItems = exports.SelectBulkActiveItems = exports.SelectActiveItems = exports.Select = exports.PrimaryAction = exports.Focused = exports.Filters = exports.FilterNoColumnSelector = exports.Basic = exports.ActionsAndPrimaryAction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _InputFilters = require("../../Form/Inputs/InputFilters");

var _filters = require("../../fixtures/filters");

var _columns = require("../../fixtures/DataTable/columns");

var _data = require("../../fixtures/DataTable/data");

var _DataTable = require("../DataTable");

var _Item = require("../Item");

var _utils = require("../utils");

var _items = require("./items");

var _excluded = ["bulk", "caption", "columns", "filters", "pageItems", "select", "selectedItems", "canSort"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var bulk = _ref.bulk,
      caption = _ref.caption,
      columns = _ref.columns,
      filters = _ref.filters,
      pageItems = _ref.pageItems,
      select = _ref.select,
      selectedItems = _ref.selectedItems,
      canSort = _ref.canSort,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var cleanColumns = columns.map(function (c) {
    return _objectSpread({}, c);
  });

  var allPageItems = pageItems || _data.data.map(function (_ref2) {
    var id = _ref2.id;
    return id;
  });

  var _useState = (0, _react.useState)(_data.data),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      cheeseData = _useState2[0],
      setCheeseData = _useState2[1];

  var _useState3 = (0, _react.useState)(cleanColumns),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      cheeseColumns = _useState4[0],
      setCheeseColumns = _useState4[1];

  var items = (0, _items.itemBuilder)(cheeseData, _items.actions);

  var onSort = function onSort(id, sortDirection) {
    var _doDataTableSort = (0, _utils.doDataTableSort)(cheeseData, cheeseColumns, id, sortDirection),
        sortedColumns = _doDataTableSort.columns,
        sortedData = _doDataTableSort.data;

    setCheeseData(sortedData);
    setCheeseColumns(sortedColumns);
  };

  var _useSelectManager = (0, _utils.useSelectManager)(allPageItems, selectedItems),
      onSelect = _useSelectManager.onSelect,
      onSelectAll = _useSelectManager.onSelectAll,
      selections = _useSelectManager.selections,
      setSelections = _useSelectManager.setSelections;

  var _useState5 = (0, _react.useState)(_filters.filters),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      listFilters = _useState6[0],
      setListFilters = _useState6[1];

  var onTotalSelectAll = function onTotalSelectAll() {
    return setSelections([].concat((0, _toConsumableArray2["default"])(allPageItems), ['roquefort', 'mozzarella', 'ricotta', 'feta']));
  };

  var onTotalClearAll = function onTotalClearAll() {
    return setSelections([]);
  };

  var onBulkActionClick = function onBulkActionClick() {
    alert("Performing a bulk action on these items: \n".concat(selections.join(', ')));
  };

  var selectConfig = {
    onSelect: onSelect,
    onSelectAll: onSelectAll,
    pageItems: allPageItems,
    selectedItems: selections
  };
  var bulkActionsConfig = {
    actions: _react["default"].createElement(_Item.DataTableAction, {
      onClick: onBulkActionClick
    }, "Some bulk action"),
    onTotalClearAll: onTotalClearAll,
    onTotalSelectAll: onTotalSelectAll,
    pageCount: items.length,
    totalCount: 8
  };
  return _react["default"].createElement(_DataTable.DataTable, (0, _extends2["default"])({
    bulk: bulk ? bulkActionsConfig : undefined,
    caption: "DataTable Interactions",
    columns: cheeseColumns,
    filters: filters ? _react["default"].createElement(_InputFilters.InputFilters, {
      filters: listFilters,
      onChange: function onChange(f) {
        return setListFilters(f);
      }
    }) : undefined,
    select: select ? selectConfig : undefined,
    onSort: canSort ? onSort : undefined
  }, args), items);
};

var TemplateAction = function TemplateAction(_ref3) {
  var args = (0, _extends2["default"])({}, _ref3);
  return _react["default"].createElement(_DataTable.DataTable, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  canSort: true,
  columns: _columns.columns,
  headerRowId: 'headerId'
};
var Focused = Template.bind({});
exports.Focused = Focused;
Focused.args = _objectSpread({}, Basic.args);
Focused.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var Filters = Template.bind({});
exports.Filters = Filters;
Filters.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  filters: true
});

var noHiddenColumns = _columns.columns.map(function (c) {
  return _objectSpread(_objectSpread({}, c), {}, {
    hide: undefined
  });
});

var FilterNoColumnSelector = Template.bind({});
exports.FilterNoColumnSelector = FilterNoColumnSelector;
FilterNoColumnSelector.args = _objectSpread(_objectSpread({}, Filters.args), {}, {
  columns: noHiddenColumns
});
var Select = Template.bind({});
exports.Select = Select;
Select.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  select: true
});
var SelectActiveItems = Template.bind({});
exports.SelectActiveItems = SelectActiveItems;
SelectActiveItems.args = _objectSpread(_objectSpread({}, Select.args), {}, {
  selectedItems: ['cheddar', 'gouda']
});
var SelectBulkActiveItems = Template.bind({});
exports.SelectBulkActiveItems = SelectBulkActiveItems;
SelectBulkActiveItems.args = _objectSpread(_objectSpread({}, Select.args), {}, {
  bulk: true,
  selectedItems: ['cheddar', 'gouda']
});
var SelectNoSelectedItemsOrPageItems = Template.bind({});
exports.SelectNoSelectedItemsOrPageItems = SelectNoSelectedItemsOrPageItems;
SelectNoSelectedItemsOrPageItems.args = _objectSpread(_objectSpread({}, Select.args), {}, {
  pageItems: [],
  selectedItems: []
});
var ActionsAndPrimaryAction = TemplateAction.bind({});
exports.ActionsAndPrimaryAction = ActionsAndPrimaryAction;
ActionsAndPrimaryAction.args = {
  children: _items.itemsActionsActionPrimary,
  columns: _columns.columns
};
var PrimaryAction = TemplateAction.bind({});
exports.PrimaryAction = PrimaryAction;
PrimaryAction.args = {
  children: _items.itemsActionPrimary,
  columns: _columns.columns
};
//# sourceMappingURL=Interaction.js.map