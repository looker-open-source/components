"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("@looker/components");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Slider = function Slider(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      options = _ref.options;

  var optionsWithDefaults = _objectSpread({
    min: 0,
    max: 100
  }, options);

  var handleChange = function handleChange(e) {
    var value = e.currentTarget.value;
    onChange(parseInt(value, 10));
  };

  return _react["default"].createElement(SliderWrapper, null, _react["default"].createElement(_components.Slider, {
    min: optionsWithDefaults.min,
    max: optionsWithDefaults.max,
    value: value,
    onChange: handleChange
  }));
};

exports.Slider = Slider;

var SliderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Slider__SliderWrapper",
  componentId: "sc-15v8199-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
});
//# sourceMappingURL=Slider.js.map