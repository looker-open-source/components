"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _FieldSlider = require("../../FieldSlider");

function Disabled() {
  return _react["default"].createElement(_FieldSlider.FieldSlider, {
    disabled: true,
    label: "Disabled",
    max: 5,
    min: 0
  });
}
//# sourceMappingURL=Disabled.js.map