"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingSteps;
var _react = _interopRequireDefault(require("react"));
var _FieldSlider = require("../../FieldSlider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FloatingSteps() {
  return _react["default"].createElement(_FieldSlider.FieldSlider, {
    label: "Floating step",
    max: 3,
    min: 0,
    step: 0.5,
    value: 1.5
  });
}
//# sourceMappingURL=FloatingSteps.js.map