"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Steps;
var _react = _interopRequireDefault(require("react"));
var _FieldSlider = require("../../FieldSlider");

function Steps() {
  return _react["default"].createElement(_FieldSlider.FieldSlider, {
    label: "Step",
    max: 1000,
    min: 0,
    step: 100
  });
}
//# sourceMappingURL=Steps.js.map