"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Warn = exports.Positive = exports.NoActions = exports.Inform = exports.CustomActionsDeux = exports.CustomActions = exports.Critical = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _storybook = require("@looker/storybook");

var _Button = require("../Button");

var _MessageBar = require("./MessageBar");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_MessageBar.MessageBar, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: 'Hey! This is a message to you.'
};
var Warn = Template.bind({});
exports.Warn = Warn;
Warn.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'warn'
});
var Critical = Template.bind({});
exports.Critical = Critical;
Critical.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'critical'
});
var Positive = Template.bind({});
exports.Positive = Positive;
Positive.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'positive'
});
var Inform = Template.bind({});
exports.Inform = Inform;
Inform.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'inform'
});
var NoActions = Template.bind({});
exports.NoActions = NoActions;
NoActions.args = _objectSpread(_objectSpread({}, Critical.args), {}, {
  noActions: true
});
var CustomActions = Template.bind({});
exports.CustomActions = CustomActions;
CustomActions.args = _objectSpread(_objectSpread({}, Positive.args), {}, {
  primaryAction: 'Do Thing',
  secondaryAction: 'Dismiss'
});
var CustomActionsDeux = Template.bind({});
exports.CustomActionsDeux = CustomActionsDeux;
CustomActionsDeux.args = _objectSpread(_objectSpread({}, Positive.args), {}, {
  primaryAction: _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return alert('Primary Action Taken');
    },
    iconBefore: _react["default"].createElement(_material.Delete, null)
  }, "Dismiss"),
  secondaryAction: _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return alert('Secondary Action Taken');
    },
    color: "neutral",
    iconBefore: _react["default"].createElement(_material.GridView, null)
  }, "Return To Menu")
});
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _MessageBar.MessageBar,
  title: 'MessageBar'
};
exports["default"] = _default;
//# sourceMappingURL=MessageBar.stories.js.map