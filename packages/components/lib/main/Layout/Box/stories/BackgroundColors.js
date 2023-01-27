"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BackgroundColors;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function BackgroundColors() {
  return _react["default"].createElement(_.Space, {
    bg: "ui3",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    bg: "positive",
    color: "inverseOn",
    p: "u4"
  }, "My background is ", _react["default"].createElement(_.Code, null, "positive"), "."));
}
//# sourceMappingURL=BackgroundColors.js.map