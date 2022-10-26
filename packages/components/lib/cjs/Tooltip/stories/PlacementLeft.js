"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlacementLeft;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

function PlacementLeft() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: 'Simple Content',
    placement: 'left'
  }, _react["default"].createElement(_Button.Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=PlacementLeft.js.map