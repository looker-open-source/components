import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { FilterToken } from './FilterToken';
export default {
  title: 'Filters / FilterToken',
  component: FilterToken
};

const Template = args => {
  return React.createElement(FilterToken, args);
};

export const Basic = Template.bind({});
Basic.args = {
  expressionType: 'date',
  expression: '',
  allowMultipleValues: true
};
export const Expression = Template.bind({});
Expression.args = {
  expressionType: 'string',
  expression: 'foo,bar',
  allowMultipleValues: true
};
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isRequired: true
});
export const Inline = Template.bind({});
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  config: {
    display: 'inline'
  }
});
//# sourceMappingURL=FilterToken.stories.js.map