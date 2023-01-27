"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SpacingResponsively;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function SpacingResponsively() {
  return _react["default"].createElement(_.Space, {
    bg: "ui3",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    pl: ['u2',
    'u4',
    'u8',
    'u12']
  }, "My padding on the left changes with breakpoints"));
}
//# sourceMappingURL=SpacingResponsively.js.map