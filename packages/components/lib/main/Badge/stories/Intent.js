"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Intent;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Intent(props) {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Badge, (0, _extends2["default"])({
    intent: "key"
  }, props), "Key"), _react["default"].createElement(_.Badge, (0, _extends2["default"])({
    intent: "positive"
  }, props), "Positive"), _react["default"].createElement(_.Badge, (0, _extends2["default"])({
    intent: "inform"
  }, props), "Inform"), _react["default"].createElement(_.Badge, (0, _extends2["default"])({
    intent: "neutral"
  }, props), "Neutral"), _react["default"].createElement(_.Badge, (0, _extends2["default"])({
    intent: "warn"
  }, props), "Warn"), _react["default"].createElement(_.Badge, (0, _extends2["default"])({
    intent: "critical"
  }, props), "Critical"));
}
//# sourceMappingURL=Intent.js.map