"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Floating;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Floating() {
  return _react["default"].createElement(_.FieldRangeSlider, {
    max: 3.7,
    min: 0.1,
    step: 0.1
  });
}
//# sourceMappingURL=Floating.js.map