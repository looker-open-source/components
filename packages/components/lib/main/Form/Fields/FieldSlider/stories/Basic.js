"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _FieldSlider = require("../../FieldSlider");

function Basic(props) {
  return _react["default"].createElement(_FieldSlider.FieldSlider, (0, _extends2["default"])({
    label: "Basic",
    max: 5,
    min: 0
  }, props));
}
//# sourceMappingURL=Basic.js.map