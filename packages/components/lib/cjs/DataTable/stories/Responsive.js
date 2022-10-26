"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveOverflowSelectNoActions = exports.ResponsiveOverflowSelectFirstColumnNotStuck = exports.ResponsiveOverflowFirstColumnStuck = exports.ResponsiveOverflow = exports.ResponsiveMinimal = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _useSelectManager2 = require("../utils/useSelectManager");

var _columns = require("../../fixtures/DataTable/columns");

var _data = require("../../fixtures/DataTable/data");

var _items = require("./items");

var _excluded = ["caption", "select"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var caption = _ref.caption,
      selectActive = _ref.select,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var allPageItems = _data.data.map(function (_ref2) {
    var id = _ref2.id;
    return id;
  });

  var _useSelectManager = (0, _useSelectManager2.useSelectManager)(allPageItems),
      onSelect = _useSelectManager.onSelect,
      onSelectAll = _useSelectManager.onSelectAll,
      selections = _useSelectManager.selections;

  var select = selectActive ? {
    onSelect: onSelect,
    onSelectAll: onSelectAll,
    pageItems: allPageItems,
    selectedItems: selections
  } : undefined;
  return _react["default"].createElement(_.DataTable, (0, _extends2["default"])({
    caption: "DataTable Responsive",
    select: select
  }, args));
};

var hideAllColumns = _columns.columns.map(function (c) {
  return _objectSpread(_objectSpread({}, c), {}, {
    hide: true
  });
});

hideAllColumns[0].hide = false;
var ResponsiveMinimal = Template.bind({});
exports.ResponsiveMinimal = ResponsiveMinimal;
ResponsiveMinimal.args = {
  children: _items.items,
  columns: hideAllColumns
};
ResponsiveMinimal.parameters = {
  storyshots: {
    disable: true
  }
};
var ResponsiveOverflow = Template.bind({});
exports.ResponsiveOverflow = ResponsiveOverflow;
ResponsiveOverflow.args = {
  children: _items.items,
  columns: _columns.columns
};
var ResponsiveOverflowFirstColumnStuck = Template.bind({});
exports.ResponsiveOverflowFirstColumnStuck = ResponsiveOverflowFirstColumnStuck;
ResponsiveOverflowFirstColumnStuck.args = _objectSpread(_objectSpread({}, ResponsiveOverflow.args), {}, {
  firstColumnStuck: true
});
var ResponsiveOverflowSelectFirstColumnNotStuck = Template.bind({});
exports.ResponsiveOverflowSelectFirstColumnNotStuck = ResponsiveOverflowSelectFirstColumnNotStuck;
ResponsiveOverflowSelectFirstColumnNotStuck.args = _objectSpread(_objectSpread({}, ResponsiveOverflow.args), {}, {
  firstColumnStuck: false,
  select: true
});
var ResponsiveOverflowSelectNoActions = Template.bind({});
exports.ResponsiveOverflowSelectNoActions = ResponsiveOverflowSelectNoActions;
ResponsiveOverflowSelectNoActions.args = _objectSpread(_objectSpread({}, ResponsiveOverflow.args), {}, {
  children: _items.itemsNoActions,
  select: true
});
//# sourceMappingURL=Responsive.js.map