"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.UnderlineOnlyOnHover = exports.ReadOnly = exports.Placeholder = exports.Disabled = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _InlineTextArea = require("./InlineTextArea");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InlineTextArea.InlineTextArea,
  title: 'InlineTextArea'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_InlineTextArea.InlineTextArea, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Value = Template.bind({});
exports.Value = Value;
Value.args = {
  value: 'Some text here'
};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'Placeholder'
};
var UnderlineOnlyOnHover = Template.bind({});
exports.UnderlineOnlyOnHover = UnderlineOnlyOnHover;
UnderlineOnlyOnHover.args = {
  underlineOnlyOnHover: true,
  value: 'Some text here'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  value: "You can't change me."
};
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = {
  readOnly: true,
  value: "You can't change me."
};
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=InlineTextArea.stories.js.map