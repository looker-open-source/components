"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

var _excluded = ["min", "max", "value", "step", "onChange", "name", "id", "className", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getValueAsNumber = function getValueAsNumber(value, defaultValue) {
  if (typeof value === 'number') {
    return value;
  }

  var numericValue = parseFloat(value);

  if (isNaN(numericValue)) {
    console.error('value prop in Slider is not numeric');
    return defaultValue;
  }

  return numericValue;
};

var SliderInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 10 : _ref$max,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      step = _ref.step,
      onChange = _ref.onChange,
      name = _ref.name,
      id = _ref.id,
      className = _ref.className,
      disabled = _ref.disabled,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var numericValue = getValueAsNumber(value, min);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var _useState3 = (0, _react.useState)(numericValue),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      internalValue = _useState4[0],
      setInternalValue = _useState4[1];

  if (min > max) {
    console.warn("Unable to render <Slider /> because the 'min' prop was set greater than 'max' value. MIN: ".concat(min, ", MAX: ").concat(max));
    return null;
  }

  var boundSliderValue = function boundSliderValue(v) {
    return Math.min(Math.max(v, min), max);
  };

  var displayValue = (0, _isFunction["default"])(onChange) ? boundSliderValue(numericValue) : boundSliderValue(internalValue);
  var fillPercent = Math.round((displayValue - min) / (max - min) * 100);

  var handleFocus = function handleFocus() {
    setIsFocused(true);
  };

  var handleUnfocus = function handleUnfocus() {
    setIsFocused(false);
  };

  var internalChangeHandler = function internalChangeHandler(event) {
    var evtValue = event.target.value;
    setInternalValue(parseFloat(evtValue));
  };

  var handleChange = (0, _isFunction["default"])(onChange) ? onChange : internalChangeHandler;
  return _react["default"].createElement("div", {
    className: className,
    "data-testid": "container"
  }, _react["default"].createElement(SliderValueWrapper, null, _react["default"].createElement(SliderValue, {
    disabled: disabled,
    isFocused: isFocused,
    offsetPercent: fillPercent
  }, displayValue)), _react["default"].createElement(SliderTrack, null, _react["default"].createElement(SliderFill, {
    offsetPercent: fillPercent,
    disabled: disabled
  }), _react["default"].createElement(SliderThumb, {
    isFocused: isFocused,
    offsetPercent: fillPercent,
    disabled: disabled
  })), _react["default"].createElement(SliderInput, {
    disabled: disabled,
    id: id,
    isFocused: isFocused,
    max: max,
    min: min,
    name: name,
    onChange: handleChange,
    step: step,
    offsetPercent: fillPercent,
    value: displayValue,
    "aria-labelledby": restProps['aria-labelledby'],
    "aria-describedby": restProps['aria-describedby'],
    "data-testid": "slider-input",
    ref: ref,
    onBlur: handleUnfocus,
    onFocus: handleFocus
  }));
});
var sliderThumbCss = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: 16px;\n  visibility: hidden;\n  width: 16px;\n"])));

var SliderThumb = _styledComponents["default"].div.withConfig({
  displayName: "Slider__SliderThumb",
  componentId: "sc-1q2hgcp-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 100%;\n  left: ", ";\n  position: absolute;\n  top: -6px;\n  transform: translateX(-50%);\n  transition: transform 250ms, box-shadow 250ms;\n\n  ", "\n"])), function (_ref2) {
  var _ref2$offsetPercent = _ref2.offsetPercent,
      offsetPercent = _ref2$offsetPercent === void 0 ? 0 : _ref2$offsetPercent;
  return "".concat(offsetPercent, "%");
}, function (_ref3) {
  var colors = _ref3.theme.colors,
      isFocused = _ref3.isFocused,
      disabled = _ref3.disabled;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    background: ", ";\n    border: 3px solid ", ";\n    height: 16px;\n    width: 16px;\n    ", "\n    ", "\n  "])), colors.field, colors.key, isFocused && 'border-width: 5px;', disabled && "border-color: ".concat(colors.neutral, ";"));
});

var SliderInput = _styledComponents["default"].input.attrs(function () {
  return {
    type: 'range'
  };
}).withConfig({
  displayName: "Slider__SliderInput",
  componentId: "sc-1q2hgcp-1"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  display: block;\n  height: 22px;\n  left: 8px;\n  margin: 0;\n  position: relative;\n  -webkit-appearance: none; /* stylelint-disable-line */\n  width: calc(100% - 16px);\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none; /* stylelint-disable-line */\n    ", "\n  }\n\n  &::-moz-range-thumb {\n    ", "\n  }\n\n  &::-ms-thumb {\n    ", "\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n    cursor: pointer;\n    width: 100%;\n  }\n\n  &::-moz-focus-outer {\n    border: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), sliderThumbCss, sliderThumbCss, sliderThumbCss);

var SliderTrack = _styledComponents["default"].div.withConfig({
  displayName: "Slider__SliderTrack",
  componentId: "sc-1q2hgcp-2"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: ", ";\n  height: 4px;\n  left: 16px;\n  margin-top: -2px;\n  position: absolute;\n  top: 50%;\n  width: calc(100% - 32px);\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.ui2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.radii.small;
});

var SliderFill = _styledComponents["default"].div.withConfig({
  displayName: "Slider__SliderFill",
  componentId: "sc-1q2hgcp-3"
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: ", ";\n  height: 100%;\n  width: ", "%;\n"])), function (_ref6) {
  var colors = _ref6.theme.colors,
      disabled = _ref6.disabled;
  return disabled ? colors.neutral : colors.key;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.radii.small;
}, function (_ref8) {
  var offsetPercent = _ref8.offsetPercent;
  return offsetPercent;
});

var SliderValue = _styledComponents["default"].div.withConfig({
  displayName: "Slider__SliderValue",
  componentId: "sc-1q2hgcp-4"
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1rem;\n  color: ", ";\n  left: ", "%;\n  padding: 0 0.5rem;\n  position: absolute;\n  text-align: center;\n  transform: translateX(-50%) translateY(-0.9rem);\n  user-select: none;\n"])), function (_ref9) {
  var theme = _ref9.theme,
      isFocused = _ref9.isFocused;
  return isFocused && theme.colors.keyAccent;
}, function (_ref10) {
  var colors = _ref10.theme.colors,
      disabled = _ref10.disabled;
  return disabled ? colors.neutral : colors.key;
}, function (_ref11) {
  var offsetPercent = _ref11.offsetPercent;
  return offsetPercent;
});

var SliderValueWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Slider__SliderValueWrapper",
  componentId: "sc-1q2hgcp-5"
})(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n  position: relative;\n  width: calc(100% - 30px);\n"])));

var Slider = (0, _styledComponents["default"])(SliderInternal).attrs(function (_ref12) {
  var _ref12$fontSize = _ref12.fontSize,
      fontSize = _ref12$fontSize === void 0 ? 'small' : _ref12$fontSize,
      _ref12$lineHeight = _ref12.lineHeight,
      lineHeight = _ref12$lineHeight === void 0 ? 'xsmall' : _ref12$lineHeight,
      _ref12$mt = _ref12.mt,
      mt = _ref12$mt === void 0 ? 'medium' : _ref12$mt,
      _ref12$width = _ref12.width,
      width = _ref12$width === void 0 ? '100%' : _ref12$width;
  return {
    fontSize: fontSize,
    lineHeight: lineHeight,
    mt: mt,
    width: width
  };
}).withConfig({
  displayName: "Slider",
  componentId: "sc-1q2hgcp-6"
})(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n"])), _designTokens.reset, _designTokens.space, _designTokens.width, _designTokens.typography);
exports.Slider = Slider;
SliderInternal.displayName = 'Slider';
//# sourceMappingURL=Slider.js.map