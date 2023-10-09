"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _FieldSlider = require("../../FieldSlider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Disabled() {
  return _react["default"].createElement(_FieldSlider.FieldSlider, {
    disabled: true,
    label: "Disabled",
    max: 5,
    min: 0
  });
}
//# sourceMappingURL=Disabled.js.map