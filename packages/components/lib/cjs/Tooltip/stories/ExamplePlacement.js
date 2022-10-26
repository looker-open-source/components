"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExamplePlacement;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

var _Layout = require("../../Layout");

function ExamplePlacement() {
  return _react["default"].createElement(_Layout.Space, {
    around: true
  }, _react["default"].createElement(_Tooltip.Tooltip, {
    content: "I'm on top",
    placement: "top"
  }, _react["default"].createElement(_Button.Button, null, "Top")), _react["default"].createElement(_Tooltip.Tooltip, {
    content: "I'm on bottom",
    placement: "bottom"
  }, _react["default"].createElement(_Button.Button, null, "Bottom")), _react["default"].createElement(_Tooltip.Tooltip, {
    content: "I'm on the left",
    placement: "left"
  }, _react["default"].createElement(_Button.Button, null, "Left")), _react["default"].createElement(_Tooltip.Tooltip, {
    content: "I'm on the right",
    placement: "right"
  }, _react["default"].createElement(_Button.Button, null, "Right")));
}
//# sourceMappingURL=ExamplePlacement.js.map