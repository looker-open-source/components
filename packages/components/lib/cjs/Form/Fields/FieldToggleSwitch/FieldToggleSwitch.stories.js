"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tabstops = exports.ReadOnly = exports.Error = exports.DisabledChecked = exports.Disabled = exports.DetailDescriptionError = exports.DetailDescription = exports.Checked = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _useToggle2 = require("../../../utils/useToggle");

var _FieldToggleSwitch = require("./FieldToggleSwitch");

var _excluded = ["on"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var _ref$on = _ref.on,
      on = _ref$on === void 0 ? false : _ref$on,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useToggle = (0, _useToggle2.useToggle)(on),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  return _react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, (0, _extends2["default"])({
    onChange: toggle,
    on: value
  }, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  id: 'id',
  label: 'Toggle Switch',
  name: 'thumbsUp'
};
var DetailDescription = Template.bind({});
exports.DetailDescription = DetailDescription;
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'describe something here.',
  detail: '4/20'
});
var Tabstops = Template.bind({});
exports.Tabstops = Tabstops;
Tabstops.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: _react["default"].createElement(_react["default"].Fragment, null, "describe something here. ", _react["default"].createElement("a", {
    href: "somewhere"
  }, "Link")),
  detail: _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_material.Delete, null),
    label: "Hello world"
  })
});
Tabstops.parameters = {
  storyshots: {
    disable: true
  }
};
var Checked = Template.bind({});
exports.Checked = Checked;
Checked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  on: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var DisabledChecked = Template.bind({});
exports.DisabledChecked = DisabledChecked;
DisabledChecked.args = _objectSpread(_objectSpread({}, Checked.args), {}, {
  disabled: true
});
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  readOnly: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
var DetailDescriptionError = Template.bind({});
exports.DetailDescriptionError = DetailDescriptionError;
DetailDescriptionError.args = _objectSpread(_objectSpread({}, DetailDescription.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldToggleSwitch.FieldToggleSwitch,
  title: 'FieldToggleSwitch'
};
exports["default"] = _default;
//# sourceMappingURL=FieldToggleSwitch.stories.js.map