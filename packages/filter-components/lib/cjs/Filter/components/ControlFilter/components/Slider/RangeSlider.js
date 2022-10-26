"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeSlider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _components = require("@looker/components");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var RangeSlider = function RangeSlider(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      name = _ref.name;

  var bounds = _objectSpread({
    min: 0,
    max: 100
  }, options || {});

  var handleOnChange = function handleOnChange(v) {
    onChange({
      min: v[0],
      max: v[1]
    });
  };

  return _react["default"].createElement(RangeSliderWrapper, null, _react["default"].createElement(_components.RangeSlider, {
    max: bounds.max,
    min: bounds.min,
    value: [(0, _isNumber["default"])(value.min) ? value.min : bounds.min, (0, _isNumber["default"])(value.max) ? value.max : bounds.max],
    onChange: handleOnChange,
    name: name
  }));
};

exports.RangeSlider = RangeSlider;

var RangeSliderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "RangeSlider__RangeSliderWrapper",
  componentId: "sc-9im42e-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  min-width: 150px;\n  padding: 0 ", ";\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.small;
});
//# sourceMappingURL=RangeSlider.js.map