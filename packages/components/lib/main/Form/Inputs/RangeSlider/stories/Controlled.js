"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../../");
var _2 = require("..");
var _excluded = ["value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Disabled(props) {
  var _props$value = props.value,
    valueProp = _props$value === void 0 ? [3, 7] : _props$value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(valueProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    sliderValue = _useState2[0],
    setSliderValue = _useState2[1];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Heading, null, _react["default"].createElement("strong", null, "Value:"), " ", sliderValue[0], " \u2014 ", sliderValue[1]), _react["default"].createElement(_2.RangeSlider, (0, _extends2["default"])({
    onChange: setSliderValue,
    value: sliderValue
  }, restProps)), _react["default"].createElement(_.Space, {
    mt: "small"
  }, _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return setSliderValue([0, 10]);
    }
  }, "0 \u2014 10"), _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return setSliderValue([2, 8]);
    }
  }, "2 \u2014 8"), _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return setSliderValue([4, 6]);
    }
  }, "4 \u2014 6")));
}
//# sourceMappingURL=Controlled.js.map