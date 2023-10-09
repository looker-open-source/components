"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Intent;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Intent(props) {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Badge, _extends({
    intent: "key"
  }, props), "Key"), _react["default"].createElement(_.Badge, _extends({
    intent: "positive"
  }, props), "Positive"), _react["default"].createElement(_.Badge, _extends({
    intent: "inform"
  }, props), "Inform"), _react["default"].createElement(_.Badge, _extends({
    intent: "neutral"
  }, props), "Neutral"), _react["default"].createElement(_.Badge, _extends({
    intent: "warn"
  }, props), "Warn"), _react["default"].createElement(_.Badge, _extends({
    intent: "critical"
  }, props), "Critical"));
}
//# sourceMappingURL=Intent.js.map