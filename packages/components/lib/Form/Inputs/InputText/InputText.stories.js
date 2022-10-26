import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Close, Info } from '@styled-icons/material-rounded';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputText } from './InputText';
export default {
  argTypes,
  component: InputText,
  title: 'InputText'
};

const Template = args => React.createElement(InputText, args);

export const Basic = Template.bind({});
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder'
};
export const Value = Template.bind({});
Value.args = {
  value: 'A value'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'A value'
};
export const IconBefore = Template.bind({});
IconBefore.args = {
  iconBefore: React.createElement(Info, null),
  value: 'With an icon before'
};
export const IconAfter = Template.bind({});
IconAfter.args = {
  iconAfter: React.createElement(Close, null),
  value: 'With an icon after'
};
export const BeforeText = Template.bind({});
BeforeText.args = {
  before: '$',
  placeholder: 'Currency'
};
export const AfterText = Template.bind({});
AfterText.args = {
  after: 'lbs',
  placeholder: 'Weight'
};
export const Error = Template.bind({});
Error.args = {
  validationType: 'error'
};
export const NoErrorIcon = Template.bind({});
NoErrorIcon.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  noErrorIcon: true
});
//# sourceMappingURL=InputText.stories.js.map