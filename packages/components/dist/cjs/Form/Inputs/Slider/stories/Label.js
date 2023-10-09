"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LabeledSlider;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _2 = require("../../../");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function LabeledSlider(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.Label, {
    id: "slider-label"
  }, "Slider:"), _react["default"].createElement(_.Slider, _extends({
    "aria-labelledby": "slider-label"
  }, props)));
}
//# sourceMappingURL=Label.js.map