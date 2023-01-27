"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Customized;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

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