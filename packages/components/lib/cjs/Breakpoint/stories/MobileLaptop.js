"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MobileLaptop;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function MobileLaptop() {
  return _react["default"].createElement(_.Box2, null, _react["default"].createElement(_.Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), _react["default"].createElement(_.Breakpoint, {
    show: ['mobile', 'laptop']
  }, _react["default"].createElement(_.Box2, {
    bg: "criticalAccent",
    p: "u5"
  }, "Render on Mobile (1px \u2013 480px), Tablet (481px \u2013 768px), and Laptop (769px \u2013 1024px)")));
}
//# sourceMappingURL=MobileLaptop.js.map