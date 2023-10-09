"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Sizes;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Sizes() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Badge, {
    size: "small"
  }, "Small"), _react["default"].createElement(_.Badge, {
    size: "medium"
  }, "Medium"), _react["default"].createElement(_.Badge, {
    size: "large"
  }, "Large"));
}
//# sourceMappingURL=Sizes.js.map