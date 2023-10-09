"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableLayout = exports.DataTable = void 0;
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState2 = _slicedToArray(_useState, 2),
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
  }, filters, bulk && select && select.selectedItems.length > 0 && _react["default"].createElement(_BulkActions.BulkActions, bulk), _react["default"].createElement(_Table.Table, _extends({}, props, {
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.DataTable = DataTable;
//# sourceMappingURL=DataTable.js.map