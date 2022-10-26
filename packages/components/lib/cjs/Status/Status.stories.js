"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.XXSmall = exports.XSmall = exports.Warn = exports.Small = exports.Positive = exports.Neutral = exports.Large = exports.Inform = exports.Critical = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Status = require("./Status");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_Status.Status, args);
};

var Inform = Template.bind({});
exports.Inform = Inform;
Inform.args = {
  intent: 'inform'
};
var Critical = Template.bind({});
exports.Critical = Critical;
Critical.args = {
  intent: 'critical'
};
var Neutral = Template.bind({});
exports.Neutral = Neutral;
Neutral.args = {
  intent: 'neutral'
};
var Positive = Template.bind({});
exports.Positive = Positive;
Positive.args = {
  intent: 'positive'
};
var Warn = Template.bind({});
exports.Warn = Warn;
Warn.args = {
  intent: 'warn'
};
var XXSmall = Template.bind({});
exports.XXSmall = XXSmall;
XXSmall.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'xxsmall'
});
var XSmall = Template.bind({});
exports.XSmall = XSmall;
XSmall.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'xsmall'
});
var Small = Template.bind({});
exports.Small = Small;
Small.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'small'
});
var Large = Template.bind({});
exports.Large = Large;
Large.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'large'
});
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Status.Status,
  title: 'Status'
};
exports["default"] = _default;
//# sourceMappingURL=Status.stories.js.map