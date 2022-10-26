"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Plus1 = exports.Minus3 = exports.Minus2 = exports.Minus1 = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _List = require("../List");

var _ListItem = require("../ListItem");

var _Density = require("./Density");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Density.Density,
  title: 'Density'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Density.Density, args, _react["default"].createElement(_List.List, null, _react["default"].createElement(_ListItem.ListItem, null, "Cheddar"), _react["default"].createElement(_ListItem.ListItem, null, "Gouda"), _react["default"].createElement(_ListItem.ListItem, null, "Swiss")));
};

var Plus1 = Template.bind({});
exports.Plus1 = Plus1;
Plus1.args = {
  scale: 1
};
var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  scale: 0
};
var Minus1 = Template.bind({});
exports.Minus1 = Minus1;
Minus1.args = {
  scale: -1
};
var Minus2 = Template.bind({});
exports.Minus2 = Minus2;
Minus2.args = {
  scale: -2
};
var Minus3 = Template.bind({});
exports.Minus3 = Minus3;
Minus3.args = {
  scale: -3
};
//# sourceMappingURL=Density.stories.js.map