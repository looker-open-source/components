"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemsNoActions = exports.itemsActionsActionPrimary = exports.itemsActionPrimary = exports.items = exports.itemBuilder = exports.actions = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _data = require("../../fixtures/DataTable/data");

var _Link = require("../../Link");

var _Status = require("../../Status");

var _Tooltip = require("../../Tooltip");

var _Column = require("../Column");

var _Item = require("../Item");

var _IconButton = require("../../Button/IconButton");

var actions = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Item.DataTableAction, {
  onClick: function onClick() {
    return alert("Ordered!!");
  }
}, "Order"), _react["default"].createElement(_Item.DataTableAction, {
  onClick: function onClick() {
    return alert('Mmmm...');
  }
}, "Make Grilled Cheese"), _react["default"].createElement(_Item.DataTableAction, {
  onClick: function onClick() {
    return alert('Delete');
  }
}, "Delete"));

exports.actions = actions;

var actionPrimary = _react["default"].createElement(_IconButton.IconButton, {
  icon: _react["default"].createElement(_material.Delete, null),
  label: "Trash It",
  onClick: function onClick() {
    return alert('Trash it');
  }
});

var itemBuilder = function itemBuilder(data, actions, actionPrimary) {
  return data.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        color = _ref.color,
        inventory = _ref.inventory,
        origin = _ref.origin,
        type = _ref.type,
        fat = _ref.fat,
        calories = _ref.calories,
        protein = _ref.protein,
        description = _ref.description,
        calcium = _ref.calcium,
        status = _ref.status,
        disabled = _ref.disabled;
    var intent = 'positive';

    if (status === 'Out of Stock') {
      intent = 'critical';
    } else if (status === 'Low Stock') {
      intent = 'warn';
    }

    return _react["default"].createElement(_Item.DataTableItem, {
      actionPrimary: actionPrimary,
      actions: actions,
      disabled: disabled,
      id: id,
      key: id
    }, _react["default"].createElement(_Column.DataTableCell, {
      description: type
    }, _react["default"].createElement(_Link.Link, {
      href: "https://components.looker.com/",
      target: "_blank"
    }, name)), _react["default"].createElement(_Column.DataTableCell, null, _react["default"].createElement(_Tooltip.Tooltip, {
      content: status
    }, _react["default"].createElement(_Status.Status, {
      intent: intent,
      title: status,
      size: "xsmall"
    }))), _react["default"].createElement(_Column.DataTableCell, null, inventory), _react["default"].createElement(_Column.DataTableCell, null, color), _react["default"].createElement(_Column.DataTableCell, null, description), _react["default"].createElement(_Column.DataTableCell, null, origin), _react["default"].createElement(_Column.DataTableCell, null, calories), _react["default"].createElement(_Column.DataTableCell, null, fat), _react["default"].createElement(_Column.DataTableCell, null, protein), _react["default"].createElement(_Column.DataTableCell, null, calcium));
  });
};

exports.itemBuilder = itemBuilder;
var items = itemBuilder(_data.data, actions);
exports.items = items;
var itemsNoActions = itemBuilder(_data.data);
exports.itemsNoActions = itemsNoActions;
var itemsActionsActionPrimary = itemBuilder(_data.data, actions, actionPrimary);
exports.itemsActionsActionPrimary = itemsActionsActionPrimary;
var itemsActionPrimary = itemBuilder(_data.data, null, actionPrimary);
exports.itemsActionPrimary = itemsActionPrimary;
//# sourceMappingURL=items.js.map