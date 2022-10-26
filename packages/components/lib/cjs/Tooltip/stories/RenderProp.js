"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderProp;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

function RenderProp() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Start editing",
    placement: "right"
  }, function (tooltipProps) {
    return _react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      m: "xxxlarge"
    }, tooltipProps), "Open Tooltip");
  });
}
//# sourceMappingURL=RenderProp.js.map