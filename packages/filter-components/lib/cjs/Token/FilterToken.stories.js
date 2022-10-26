"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Inline = exports.Expression = exports.Error = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _FilterToken = require("./FilterToken");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Filters / FilterToken',
  component: _FilterToken.FilterToken
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_FilterToken.FilterToken, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  expressionType: 'date',
  expression: '',
  allowMultipleValues: true
};
var Expression = Template.bind({});
exports.Expression = Expression;
Expression.args = {
  expressionType: 'string',
  expression: 'foo,bar',
  allowMultipleValues: true
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isRequired: true
});
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  config: {
    display: 'inline'
  }
});
//# sourceMappingURL=FilterToken.stories.js.map