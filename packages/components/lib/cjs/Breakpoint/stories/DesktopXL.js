"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DesktopXL;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function DesktopXL() {
  return _react["default"].createElement(_.Box2, null, _react["default"].createElement(_.Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), _react["default"].createElement(_.Breakpoint, {
    show: ['desktop', 'xl']
  }, _react["default"].createElement(_.Box2, {
    bg: "keyAccent",
    p: "u5"
  }, "Desktop (1025px - 1200px) and xl screens (1201px and greater)")));
}
//# sourceMappingURL=DesktopXL.js.map