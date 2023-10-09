"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = External;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function External() {
  return _react["default"].createElement(_.Link, {
    href: "https://google.com",
    isExternal: true
  }, "Leaving this domain");
}
//# sourceMappingURL=External.js.map