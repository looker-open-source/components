"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _ValidationMessage = require("./ValidationMessage");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _ValidationMessage.ValidationMessage,
  title: 'ValidationMessage'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_ValidationMessage.ValidationMessage, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  message: 'Error!',
  type: 'error'
};
//# sourceMappingURL=ValidationMessage.stories.js.map