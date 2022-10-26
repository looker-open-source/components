"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Number = exports.Letter = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _OrderedList = require("./OrderedList");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _OrderedList.OrderedList,
  title: 'OrderedList'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_OrderedList.OrderedList, args, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack"));
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Number = Template.bind({});
exports.Number = Number;
Number.args = {
  type: 'number'
};
var Letter = Template.bind({});
exports.Letter = Letter;
Letter.args = {
  type: 'letter'
};
//# sourceMappingURL=OrderedList.stories.js.map