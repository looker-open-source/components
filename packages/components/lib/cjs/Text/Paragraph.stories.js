"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Truncate = exports.TextTransform = exports.TextDecoration = exports.TextAlign = exports.MultilineTruncate = exports.FontWeight = exports.FontSize = exports.Default = exports.Color = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Paragraph = require("./Paragraph");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Paragraph.Paragraph,
  title: 'Paragraph'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Paragraph.Paragraph, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: 'Paragraph Text'
};
var FontSize = Template.bind({});
exports.FontSize = FontSize;
FontSize.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  fontSize: 'xlarge'
});
var TextAlign = Template.bind({});
exports.TextAlign = TextAlign;
TextAlign.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  textAlign: 'center'
});
var FontWeight = Template.bind({});
exports.FontWeight = FontWeight;
FontWeight.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  fontWeight: 'bold'
});
var Color = Template.bind({});
exports.Color = Color;
Color.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  color: 'key'
});
var TextTransform = Template.bind({});
exports.TextTransform = TextTransform;
TextTransform.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  textTransform: 'uppercase'
});
var TextDecoration = Template.bind({});
exports.TextDecoration = TextDecoration;
TextDecoration.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  textDecoration: 'line-through'
});
var Truncate = Template.bind({});
exports.Truncate = Truncate;
Truncate.args = {
  children: "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!",
  truncate: true
};
var MultilineTruncate = Template.bind({});
exports.MultilineTruncate = MultilineTruncate;
MultilineTruncate.args = {
  children: "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!",
  truncateLines: 2
};
//# sourceMappingURL=Paragraph.stories.js.map