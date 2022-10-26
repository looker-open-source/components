"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReadOnlyCheckedMixed = exports.ReadOnlyChecked = exports.ReadOnly = exports.MixedChecked = exports.DisabledCheckedMixed = exports.DisabledChecked = exports.Disabled = exports.Checked = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Checkbox = require("./Checkbox");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Checkbox.Checkbox,
  title: 'Checkbox'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Checkbox.Checkbox, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Checked = Template.bind({});
exports.Checked = Checked;
Checked.args = {
  checked: true
};
var MixedChecked = Template.bind({});
exports.MixedChecked = MixedChecked;
MixedChecked.args = {
  checked: 'mixed'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true
};
var DisabledChecked = Template.bind({});
exports.DisabledChecked = DisabledChecked;
DisabledChecked.args = _objectSpread(_objectSpread({}, Checked.args), Disabled.args);
var DisabledCheckedMixed = Template.bind({});
exports.DisabledCheckedMixed = DisabledCheckedMixed;
DisabledCheckedMixed.args = _objectSpread(_objectSpread({}, Disabled.args), MixedChecked.args);
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = {
  readOnly: true
};
var ReadOnlyChecked = Template.bind({});
exports.ReadOnlyChecked = ReadOnlyChecked;
ReadOnlyChecked.args = _objectSpread(_objectSpread({}, Checked.args), {}, {
  readOnly: true
});
var ReadOnlyCheckedMixed = Template.bind({});
exports.ReadOnlyCheckedMixed = ReadOnlyCheckedMixed;
ReadOnlyCheckedMixed.args = _objectSpread(_objectSpread({}, MixedChecked.args), {}, {
  readOnly: true
});
//# sourceMappingURL=Checkbox.stories.js.map