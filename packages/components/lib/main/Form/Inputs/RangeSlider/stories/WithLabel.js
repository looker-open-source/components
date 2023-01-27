"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithLabel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _2 = require("../../../../");

function WithLabel(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.Label, {
    id: "slider-label"
  }, "Slider:"), _react["default"].createElement(_.RangeSlider, (0, _extends2["default"])({
    "aria-labelledby": "slider-label"
  }, props)));
}
//# sourceMappingURL=WithLabel.js.map