"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.Placeholder = exports.NoErrorIcon = exports.Icon = exports.GroupedWindowing = exports.ErrorValue = exports.ErrorPlaceholder = exports.Error = exports.DisabledPlaceholder = exports.Disabled = exports.DefaultValue = exports.ClearableValue = exports.ClearableError = exports.Clearable = exports.Basic = exports.AutoResizePlaceholder = exports.AutoResize = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _material = require("@styled-icons/material");

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Select = require("../Select");

var _options1k = require("./options1k");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_Select.Select, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  options: [{
    label: 'Cheddar',
    value: 'cheddar'
  }, {
    label: 'Gouda',
    value: 'gouda'
  }, {
    label: 'Swiss',
    value: 'swiss'
  }]
};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  placeholder: 'Placeholder'
});
var AutoResize = Template.bind({});
exports.AutoResize = AutoResize;
AutoResize.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  autoResize: true
});
var AutoResizePlaceholder = Template.bind({});
exports.AutoResizePlaceholder = AutoResizePlaceholder;
AutoResizePlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  autoResize: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var DisabledPlaceholder = Template.bind({});
exports.DisabledPlaceholder = DisabledPlaceholder;
DisabledPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  disabled: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationType: 'error'
});
var NoErrorIcon = Template.bind({});
exports.NoErrorIcon = NoErrorIcon;
NoErrorIcon.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  noErrorIcon: true
});
var ErrorPlaceholder = Template.bind({});
exports.ErrorPlaceholder = ErrorPlaceholder;
ErrorPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  validationType: 'error'
});
var Value = Template.bind({});
exports.Value = Value;
Value.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: 'gouda'
});
var ErrorValue = Template.bind({});
exports.ErrorValue = ErrorValue;
ErrorValue.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  validationType: 'error'
});
var DefaultValue = Template.bind({});
exports.DefaultValue = DefaultValue;
DefaultValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'swiss'
});
var Clearable = Template.bind({});
exports.Clearable = Clearable;
Clearable.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isClearable: true
});
var ClearableValue = Template.bind({});
exports.ClearableValue = ClearableValue;
ClearableValue.args = _objectSpread(_objectSpread({}, Clearable.args), {}, {
  value: 'gouda'
});
var ClearableError = Template.bind({});
exports.ClearableError = ClearableError;
ClearableError.args = _objectSpread(_objectSpread({}, ClearableValue.args), {}, {
  validationType: 'error'
});
var Icon = Template.bind({});
exports.Icon = Icon;
Icon.args = {
  options: [{
    icon: _react["default"].createElement(_material.AutoGraph, null),
    label: 'Bar',
    value: 'bar'
  }, {
    icon: _react["default"].createElement(_material.PieChart, null),
    label: 'Pie',
    value: 'pie'
  }, {
    icon: _react["default"].createElement(_material.TableChart, null),
    label: 'Table',
    value: 'table'
  }],
  value: 'pie'
};
var GroupedWindowing = Template.bind({});
exports.GroupedWindowing = GroupedWindowing;
GroupedWindowing.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  options: _options1k.options1kGrouped,
  width: 300
});
GroupedWindowing.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Select.Select,
  title: 'Select'
};
exports["default"] = _default;
//# sourceMappingURL=Select.stories.js.map