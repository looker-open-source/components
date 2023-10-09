"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = XL;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function XL() {
  return _react["default"].createElement(_.Box2, null, _react["default"].createElement(_.Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), _react["default"].createElement(_.Breakpoint, {
    show: "xl"
  }, _react["default"].createElement(_.Box2, {
    bg: "informAccent",
    p: "u5",
    mt: "u3"
  }, "Show on XL only (1201px and larger)")));
}
//# sourceMappingURL=XL.js.map