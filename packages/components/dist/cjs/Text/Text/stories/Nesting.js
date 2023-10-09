"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Nesting;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Nesting() {
  return _react["default"].createElement("div", {
    style: {
      color: '#c00'
    }
  }, _react["default"].createElement(_.Text, null, "This text should be red"));
}
//# sourceMappingURL=Nesting.js.map