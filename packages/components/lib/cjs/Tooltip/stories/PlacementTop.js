"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlacementTop;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

function PlacementTop() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: 'Simple Content',
    placement: 'top'
  }, _react["default"].createElement(_Button.Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=PlacementTop.js.map