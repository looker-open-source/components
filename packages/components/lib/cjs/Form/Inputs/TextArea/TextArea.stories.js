"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.Resize = exports.Placeholder = exports.Error = exports.Disabled = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _TextArea = require("./TextArea");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _TextArea.TextArea,
  title: 'TextArea'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_TextArea.TextArea, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'Placeholder'
};
var Value = Template.bind({});
exports.Value = Value;
Value.args = {
  defaultValue: 'A value'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  disabled: true
});
var Resize = Template.bind({});
exports.Resize = Resize;
Resize.args = {
  resize: true
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = {
  validationType: 'error'
};
//# sourceMappingURL=TextArea.stories.js.map