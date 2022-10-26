"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnSelector = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ViewColumn = require("@styled-icons/material/ViewColumn");

var _utils = require("../../utils");

var _Popover = require("../../Popover");

var _IconButton = require("../../Button/IconButton");

var _OptionsGroup = require("../../Form/Inputs/OptionsGroup");

var _ButtonTransparent = require("../../Button/ButtonTransparent");

var _Layout = require("../../Layout");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColumnSelector = function ColumnSelector(_ref) {
  var columns = _ref.columns,
      defaultColumnsVisible = _ref.columnsVisible,
      onColumnVisibilityChange = _ref.onColumnVisibilityChange;

  var _useTranslation = (0, _utils.useTranslation)('ColumnSelector'),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var selectableColumns = columns.filter(function (c) {
    return c.hide !== undefined;
  });

  var _useState3 = (0, _react.useState)(defaultColumnsVisible),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
  }, t('Select None'))), _react["default"].createElement(_OptionsGroup.CheckboxGroup, {
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

  return _react["default"].createElement(_react["default"].Fragment, null, popover, _react["default"].createElement(_IconButton.IconButton, (0, _extends2["default"])({
    icon: _react["default"].createElement(_ViewColumn.ViewColumn, null),
    label: t('Select columns to display')
  }, domProps)));
};

exports.ColumnSelector = ColumnSelector;
//# sourceMappingURL=ColumnSelector.js.map