"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Desktop;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Desktop() {
  return _react["default"].createElement(_.Box2, null, _react["default"].createElement(_.Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), _react["default"].createElement(_.Breakpoint, {
    show: "desktop"
  }, _react["default"].createElement(_.Box2, {
    bg: "positiveAccent",
    p: "u5",
    mt: "u3"
  }, "Show on desktop only (1025px \u2013 1200px)")));
}
//# sourceMappingURL=Desktop.js.map