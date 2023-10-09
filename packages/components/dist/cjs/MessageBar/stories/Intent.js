"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Intent;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Intent() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.MessageBar, {
    intent: "critical"
  }, "Key"), _react["default"].createElement(_.MessageBar, {
    intent: "inform"
  }, "Positive"), _react["default"].createElement(_.MessageBar, {
    intent: "positive"
  }, "Inform"), _react["default"].createElement(_.MessageBar, {
    intent: "warn"
  }, "Neutral"));
}
//# sourceMappingURL=Intent.js.map