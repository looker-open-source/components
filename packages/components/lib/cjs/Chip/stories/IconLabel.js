"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = IconLabel;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function IconLabel() {
  var alertTrigger = function alertTrigger() {
    return alert('You click on the X');
  };

  return _react["default"].createElement(_.Space, {
    gap: "u1"
  }, _react["default"].createElement(_.Chip, {
    iconLabel: "remove chip",
    onDelete: alertTrigger
  }, "hover the x"), _react["default"].createElement(_.Chip, {
    onDelete: alertTrigger
  }, "hover the x"));
}
//# sourceMappingURL=IconLabel.js.map