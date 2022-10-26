"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Required = exports.Inline = exports.ErrorInline = exports.Error = exports.Disabled = exports.Basic = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _CheckboxRadio = require("../../../fixtures/CheckboxRadio");

var _FieldRadioGroup = require("./FieldRadioGroup");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldRadioGroup.FieldRadioGroup,
  title: 'FieldRadioGroup'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_FieldRadioGroup.FieldRadioGroup, (0, _extends2["default"])({}, args, {
    autoFocus: true,
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
//# sourceMappingURL=FieldRadioGroup.stories.js.map