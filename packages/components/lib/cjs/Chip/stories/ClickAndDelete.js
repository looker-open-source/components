"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClickAndDelete;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function ClickAndDelete() {
  var handleClick = function handleClick() {
    return alert('Clicked!');
  };

  var handleDelete = function handleDelete() {
    return alert('Deleted!');
  };

  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Chip, {
    onClick: handleClick
  }, "Click Me"), _react["default"].createElement(_.Chip, {
    disabled: true,
    onClick: handleClick
  }, "Click Me (nothing happens)"), _react["default"].createElement(_.Chip, {
    onClick: handleClick,
    onDelete: handleDelete
  }, "Delete Me"), _react["default"].createElement(_.Chip, {
    disabled: true,
    onClick: handleClick,
    onDelete: handleDelete
  }, "Delete Me (nothing happens)"));
}
//# sourceMappingURL=ClickAndDelete.js.map