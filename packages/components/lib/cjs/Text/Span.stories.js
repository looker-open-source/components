"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.XXXXLarge = exports.Wrapped = exports.TextTransform = exports.TextDecoration = exports.Color = exports.Bold = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Span = require("./Span");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_Span.Span, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: 'Span Text'
};
var XXXXLarge = Template.bind({});
exports.XXXXLarge = XXXXLarge;
XXXXLarge.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  fontSize: 'xxxxlarge'
});
var Bold = Template.bind({});
exports.Bold = Bold;
Bold.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  fontWeight: 'bold'
});
var Color = Template.bind({});
exports.Color = Color;
Color.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'critical'
});
var TextTransform = Template.bind({});
exports.TextTransform = TextTransform;
TextTransform.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  textTransform: 'uppercase'
});
var Wrapped = Template.bind({});
exports.Wrapped = Wrapped;
Wrapped.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  breakword: true
});
var TextDecoration = Template.bind({});
exports.TextDecoration = TextDecoration;
TextDecoration.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  textDecoration: 'line-through'
});
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Span.Span,
  title: 'Span'
};
exports["default"] = _default;
//# sourceMappingURL=Span.stories.js.map