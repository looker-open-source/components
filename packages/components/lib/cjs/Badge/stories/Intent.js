"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Intent;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Intent() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Badge, {
    intent: "key"
  }, "Key"), _react["default"].createElement(_.Badge, {
    intent: "positive"
  }, "Positive"), _react["default"].createElement(_.Badge, {
    intent: "inform"
  }, "Inform"), _react["default"].createElement(_.Badge, {
    intent: "neutral"
  }, "Neutral"), _react["default"].createElement(_.Badge, {
    intent: "warn"
  }, "Warn"), _react["default"].createElement(_.Badge, {
    intent: "critical"
  }, "Critical"));
}
//# sourceMappingURL=Intent.js.map