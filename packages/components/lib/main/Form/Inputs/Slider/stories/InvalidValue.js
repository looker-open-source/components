"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InvalidValue;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["min", "max", "value"];
function InvalidValue(props) {
  var _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 10 : _props$max,
    _props$value = props.value,
    value = _props$value === void 0 ? 5000 : _props$value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Slider, (0, _extends2["default"])({
    min: min,
    max: max,
    value: value
  }, restProps));
}
//# sourceMappingURL=InvalidValue.js.map