"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlacemntRight;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = require("../Tooltip");
var _Button = require("../../Button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PlacemntRight() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: 'Simple Content',
    placement: 'right'
  }, _react["default"].createElement(_Button.Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=PlacementRight.js.map