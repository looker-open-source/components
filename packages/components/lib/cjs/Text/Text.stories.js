"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Nesting = exports.LineHeight = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Text = require("./Text");

var Template = function Template(args) {
  return _react["default"].createElement(_Text.Text, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: 'Text Example'
};

var Nesting = function Nesting() {
  return _react["default"].createElement("div", {
    style: {
      color: '#c00'
    }
  }, _react["default"].createElement(_Text.Text, null, "This text should be red"));
};

exports.Nesting = Nesting;

var LineHeight = function LineHeight() {
  return _react["default"].createElement("div", {
    style: {
      border: '1px solid #000'
    }
  }, _react["default"].createElement(_Text.Text, null, "This text should be 1.5rem line height"));
};

exports.LineHeight = LineHeight;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Text.Text,
  title: 'Text'
};
exports["default"] = _default;
//# sourceMappingURL=Text.stories.js.map