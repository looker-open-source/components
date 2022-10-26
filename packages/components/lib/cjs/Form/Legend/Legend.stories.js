"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Legend = require("./Legend");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Legend.Legend,
  title: 'Legend'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Legend.Legend, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: 'I am legend'
};
//# sourceMappingURL=Legend.stories.js.map