"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.Simple = exports.ReadOnly = exports.Placeholder = exports.OverflowHiddenInlineInputText = exports.Disabled = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _InlineInputText = require("./InlineInputText");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InlineInputText.InlineInputText,
  title: 'InlineInputText'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_InlineInputText.InlineInputText, args);
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
var Simple = Template.bind({});
exports.Simple = Simple;
Simple.args = {
  simple: true,
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

var OverflowHiddenInlineInputText = function OverflowHiddenInlineInputText() {
  return _react["default"].createElement("div", {
    style: {
      border: '1px solid',
      overflow: 'hidden',
      width: '100px'
    }
  }, _react["default"].createElement(_InlineInputText.InlineInputText, {
    value: "Long example value that should require scrolling to reach"
  }));
};

exports.OverflowHiddenInlineInputText = OverflowHiddenInlineInputText;
OverflowHiddenInlineInputText.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=InlineInputText.stories.js.map