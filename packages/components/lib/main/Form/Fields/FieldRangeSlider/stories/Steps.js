"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Steps;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");

function Steps() {
  return _react["default"].createElement(_.FieldRangeSlider, {
    max: 1000,
    min: 100,
    step: 100
  });
}
//# sourceMappingURL=Steps.js.map