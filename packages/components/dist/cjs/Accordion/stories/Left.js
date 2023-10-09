"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Left;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Left() {
  return _react["default"].createElement(_.Accordion, {
    content: "Hello",
    indicatorPosition: "left"
  }, "World");
}
//# sourceMappingURL=Left.js.map