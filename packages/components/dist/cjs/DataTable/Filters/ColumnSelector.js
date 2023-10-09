"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ViewColumn = require("@styled-icons/material/ViewColumn");
var _utils = require("../../utils");
var _Popover = require("../../Popover");
var _IconButton = require("../../Button/IconButton");
var _Inputs = require("../../Form/Inputs");
var _ButtonTransparent = require("../../Button/ButtonTransparent");
var _Layout = require("../../Layout");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ColumnSelector = function ColumnSelector(_ref) {
  var columns = _ref.columns,
    defaultColumnsVisible = _ref.columnsVisible,
    onColumnVisibilityChange = _ref.onColumnVisibilityChange;
  var _useTranslation = (0, _utils.useTranslation)('ColumnSelector'),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var selectableColumns = columns.filter(function (c) {
    return c.hide !== undefined;
  });
  var _useState3 = (0, _react.useState)(defaultColumnsVisible),
    _useState4 = _slicedToArray(_useState3, 2),
    columnsVisible = _useState4[0],
    setColumnsVisible = _useState4[1];
  var options = selectableColumns.map(function (column) {
    return {
      label: column.title,
      value: column.id
    };
  });
  var apply = function apply() {
    onColumnVisibilityChange(columnsVisible);
    setOpen(false);
  };
  var cancel = function cancel() {
    return setOpen(false);
  };
  var all = function all() {
    var resetColumn = columns.map(function (column) {
      return column.id;
    });
    setColumnsVisible(resetColumn);
  };
  var none = function none() {
    return setColumnsVisible([]);
  };
  var content = _react["default"].createElement(_Popover.PopoverContent, {
    width: "12rem",
    overflow: "hidden"
  }, _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, {
    gap: "u1"
  }, _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    size: "xsmall",
    onClick: all
  }, t('Select All')), _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    size: "xsmall",
    onClick: none
  }, t('Select None'))), _react["default"].createElement(_Inputs.CheckboxGroup, {
    value: columnsVisible,
    onChange: setColumnsVisible,
    options: options
  }), _react["default"].createElement(_Layout.Space, {
    reverse: true
  }, _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    onClick: apply
  }, t('Apply')), _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    onClick: cancel,
    color: "neutral"
  }, t('Cancel')))));
  var _usePopover = (0, _Popover.usePopover)({
      content: content,
      isOpen: isOpen,
      setOpen: setOpen
    }),
    popover = _usePopover.popover,
    domProps = _usePopover.domProps;
  return _react["default"].createElement(_react["default"].Fragment, null, popover, _react["default"].createElement(_IconButton.IconButton, _extends({
    icon: _react["default"].createElement(_ViewColumn.ViewColumn, null),
    label: t('Select columns to display')
  }, domProps)));
};
exports.ColumnSelector = ColumnSelector;
//# sourceMappingURL=ColumnSelector.js.map