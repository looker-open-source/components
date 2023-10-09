"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderProp;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = require("../Tooltip");
var _Button = require("../../Button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function RenderProp() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Start editing",
    placement: "right"
  }, function (tooltipProps) {
    return _react["default"].createElement(_Button.Button, _extends({
      m: "xxxlarge"
    }, tooltipProps), "Open Tooltip");
  });
}
//# sourceMappingURL=RenderProp.js.map