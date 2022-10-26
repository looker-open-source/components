"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SpaceCrush = exports.Reverse = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../../Button");

var _Icon = require("../../Icon");

var _Status = require("../../Status");

var _Text = require("../../Text");

var _Space = require("./Space");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Space.Space,
  title: 'Space'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Space.Space, args, _react["default"].createElement(_Button.Button, null, "Button A"), _react["default"].createElement(_Button.Button, null, "Button B"), _react["default"].createElement(_Button.Button, null, "Button C"));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Reverse = Template.bind({});
exports.Reverse = Reverse;
Reverse.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  reverse: true
});

var SpaceCrush = function SpaceCrush() {
  return _react["default"].createElement(_Space.Space, null, _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(_materialOutlined.AccountCircle, null),
    size: "large"
  }), _react["default"].createElement(_Status.Status, {
    intent: "inform"
  }), _react["default"].createElement(_Text.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), _react["default"].createElement(_Text.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
};

exports.SpaceCrush = SpaceCrush;
//# sourceMappingURL=Space.stories.js.map