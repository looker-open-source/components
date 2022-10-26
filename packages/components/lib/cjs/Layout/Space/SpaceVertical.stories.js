"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Stretch = exports.Reverse = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../../Button");

var _SpaceVertical = require("./SpaceVertical");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _SpaceVertical.SpaceVertical,
  title: 'SpaceVertical'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_SpaceVertical.SpaceVertical, args, _react["default"].createElement(_Button.Button, null, "Button A"), _react["default"].createElement(_Button.Button, null, "Button B"), _react["default"].createElement(_Button.Button, null, "Button C"));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Reverse = Template.bind({});
exports.Reverse = Reverse;
Reverse.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  reverse: true
});
var Stretch = Template.bind({});
exports.Stretch = Stretch;
Stretch.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  align: 'stretch'
});
//# sourceMappingURL=SpaceVertical.stories.js.map