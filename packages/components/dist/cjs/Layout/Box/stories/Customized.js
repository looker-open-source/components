"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Customized;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Customized() {
  return _react["default"].createElement(_.Space, {
    bg: "ui3",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    display: "inline"
  }, "I'm inline."), _react["default"].createElement(_.Box, {
    display: "inline"
  }, "I'm also inline."));
}
//# sourceMappingURL=Customized.js.map