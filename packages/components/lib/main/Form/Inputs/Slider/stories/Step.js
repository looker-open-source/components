"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Step;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["max", "step"];
function Step(props) {
  var _props$max = props.max,
    max = _props$max === void 0 ? 10000 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 2500 : _props$step,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Slider, (0, _extends2["default"])({
    max: max,
    step: step
  }, restProps));
}
//# sourceMappingURL=Step.js.map