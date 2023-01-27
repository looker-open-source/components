"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeightsWidths;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function HeightsWidths() {
  return _react["default"].createElement(_.Space, {
    bg: "ui3",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    display: "inline-block",
    height: "100px",
    bg: "positive",
    color: "inverseOn",
    p: "u3",
    minWidth: "200px"
  }, "I'm 100px tall."), _react["default"].createElement(_.Box, {
    display: "inline-block",
    height: "50px",
    bg: "inform",
    color: "inverseOn",
    ml: "u3",
    p: "u3",
    width: "100px",
    fontSize: "small"
  }, "I'm 50px tall."));
}
//# sourceMappingURL=HeightsWidths.js.map