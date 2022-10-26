"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Color = exports.Bullet = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _UnorderedList = require("./UnorderedList");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _UnorderedList.UnorderedList,
  title: 'UnorderedList'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_UnorderedList.UnorderedList, args, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack"));
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Bullet = Template.bind({});
exports.Bullet = Bullet;
Bullet.args = {
  type: 'bullet'
};
var Color = Template.bind({});
exports.Color = Color;
Color.args = {
  color: 'key'
};
//# sourceMappingURL=UnorderedList.stories.js.map