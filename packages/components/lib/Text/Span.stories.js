import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Span } from './Span';

const Template = args => React.createElement(Span, args);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Span Text'
};
export const XXXXLarge = Template.bind({});
XXXXLarge.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  fontSize: 'xxxxlarge'
});
export const Bold = Template.bind({});
Bold.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  fontWeight: 'bold'
});
export const Color = Template.bind({});
Color.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'critical'
});
export const TextTransform = Template.bind({});
TextTransform.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  textTransform: 'uppercase'
});
export const Wrapped = Template.bind({});
Wrapped.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  breakword: true
});
export const TextDecoration = Template.bind({});
TextDecoration.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  textDecoration: 'line-through'
});
export default {
  argTypes,
  component: Span,
  title: 'Span'
};
//# sourceMappingURL=Span.stories.js.map