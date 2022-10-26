"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.Placeholder = exports.NoErrorIcon = exports.IconBefore = exports.IconAfter = exports.Error = exports.Disabled = exports.BeforeText = exports.Basic = exports.AfterText = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _materialRounded = require("@styled-icons/material-rounded");

var _storybook = require("@looker/storybook");

var _InputText = require("./InputText");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputText.InputText,
  title: 'InputText'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_InputText.InputText, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'Placeholder'
};
var Value = Template.bind({});
exports.Value = Value;
Value.args = {
  value: 'A value'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  value: 'A value'
};
var IconBefore = Template.bind({});
exports.IconBefore = IconBefore;
IconBefore.args = {
  iconBefore: _react["default"].createElement(_materialRounded.Info, null),
  value: 'With an icon before'
};
var IconAfter = Template.bind({});
exports.IconAfter = IconAfter;
IconAfter.args = {
  iconAfter: _react["default"].createElement(_materialRounded.Close, null),
  value: 'With an icon after'
};
var BeforeText = Template.bind({});
exports.BeforeText = BeforeText;
BeforeText.args = {
  before: '$',
  placeholder: 'Currency'
};
var AfterText = Template.bind({});
exports.AfterText = AfterText;
AfterText.args = {
  after: 'lbs',
  placeholder: 'Weight'
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = {
  validationType: 'error'
};
var NoErrorIcon = Template.bind({});
exports.NoErrorIcon = NoErrorIcon;
NoErrorIcon.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  noErrorIcon: true
});
//# sourceMappingURL=InputText.stories.js.map