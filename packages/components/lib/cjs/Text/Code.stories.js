"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Code = require("./Code");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Code.Code,
  title: 'Code'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Code.Code, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: 'This is a simple example of some code'
};
//# sourceMappingURL=Code.stories.js.map