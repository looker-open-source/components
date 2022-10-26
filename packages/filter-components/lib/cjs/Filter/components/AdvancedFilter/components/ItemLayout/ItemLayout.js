"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemLayout = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _AddRemoveButtons = require("../AddRemoveButtons");

var _OperatorLabel = require("../OperatorLabel");

var ItemLayout = function ItemLayout(_ref) {
  var children = _ref.children,
      item = _ref.item,
      onAdd = _ref.onAdd,
      onRemove = _ref.onRemove,
      showOperator = _ref.showOperator,
      showAdd = _ref.showAdd,
      showRemove = _ref.showRemove;

  var handleAdd = function handleAdd() {
    return onAdd(item);
  };

  var handleRemove = function handleRemove() {
    return onRemove(item.id);
  };

  return _react["default"].createElement(_components.Box2, {
    role: "group",
    display: "flex",
    alignItems: "center"
  }, showOperator && _react["default"].createElement(_components.Box2, {
    width: 44,
    mr: "medium",
    textAlign: "right"
  }, showOperator === true && _react["default"].createElement(_OperatorLabel.OperatorLabel, {
    value: item.is
  })), children, _react["default"].createElement(_AddRemoveButtons.AddRemoveButtons, {
    showAdd: showAdd,
    showRemove: showRemove,
    onAdd: handleAdd,
    onRemove: handleRemove
  }));
};

exports.ItemLayout = ItemLayout;
//# sourceMappingURL=ItemLayout.js.map