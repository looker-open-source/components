"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReadOnly = exports.DisabledChecked = exports.Disabled = exports.Checked = exports.Basic = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _useToggle2 = require("../../../utils/useToggle");

var _ToggleSwitch = require("./ToggleSwitch");

var _excluded = ["on"];

var Template = function Template(_ref) {
  var _ref$on = _ref.on,
      on = _ref$on === void 0 ? false : _ref$on,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useToggle = (0, _useToggle2.useToggle)(on),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  return _react["default"].createElement(_ToggleSwitch.ToggleSwitch, (0, _extends2["default"])({
    onChange: toggle,
    on: value
  }, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Checked = Template.bind({});
exports.Checked = Checked;
Checked.args = {
  on: true
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true
};
var DisabledChecked = Template.bind({});
exports.DisabledChecked = DisabledChecked;
DisabledChecked.args = {
  disabled: true,
  on: true
};
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = {
  readOnly: true
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _ToggleSwitch.ToggleSwitch,
  title: 'ToggleSwitch'
};
exports["default"] = _default;
//# sourceMappingURL=ToggleSwitch.stories.js.map