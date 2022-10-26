"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Truncate = exports.Required = exports.Inline = exports.ErrorInline = exports.Error = exports.Disabled = exports.Basic = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _CheckboxRadio = require("../../../fixtures/CheckboxRadio");

var _Layout = require("../../../Layout");

var _FieldCheckboxGroup = require("./FieldCheckboxGroup");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldCheckboxGroup.FieldCheckboxGroup,
  title: 'FieldCheckboxGroup'
};
exports["default"] = _default;
var defaultValueCheckbox = ['swiss', 'swiss-2', 'swiss-3', 'cheddar', 'cheddar-2', 'cheddar-3'];

var Template = function Template(args) {
  return _react["default"].createElement(_FieldCheckboxGroup.FieldCheckboxGroup, (0, _extends2["default"])({}, args, {
    autoFocus: true,
    defaultValue: defaultValueCheckbox,
    label: "Cheeses",
    description: "Pick all your cheeses",
    options: _CheckboxRadio.options
  }));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true
};
var Required = Template.bind({});
exports.Required = Required;
Required.args = {
  required: true
};
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = {
  inline: true
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = {
  validationMessage: {
    message: 'Select at least 1 cheese',
    type: 'error'
  }
};
var ErrorInline = Template.bind({});
exports.ErrorInline = ErrorInline;
ErrorInline.args = {
  inline: true,
  required: true,
  validationMessage: {
    message: 'Select at least 1 cheese',
    type: 'error'
  }
};
var longOption = {
  label: "All legislative Powers herein granted shall be vested in a Congress of the\n  United States, which shall consist of a Senate and House of\n  Representatives.",
  value: 'long'
};

var Truncate = function Truncate() {
  return _react["default"].createElement(_Layout.Box2, {
    width: 300
  }, _react["default"].createElement(_FieldCheckboxGroup.FieldCheckboxGroup, {
    defaultValue: defaultValueCheckbox,
    label: "Cheeses",
    options: [longOption].concat((0, _toConsumableArray2["default"])(_CheckboxRadio.options))
  }));
};

exports.Truncate = Truncate;
//# sourceMappingURL=FieldCheckboxGroup.stories.js.map