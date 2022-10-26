import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Status } from './Status';

const Template = args => React.createElement(Status, args);

export const Inform = Template.bind({});
Inform.args = {
  intent: 'inform'
};
export const Critical = Template.bind({});
Critical.args = {
  intent: 'critical'
};
export const Neutral = Template.bind({});
Neutral.args = {
  intent: 'neutral'
};
export const Positive = Template.bind({});
Positive.args = {
  intent: 'positive'
};
export const Warn = Template.bind({});
Warn.args = {
  intent: 'warn'
};
export const XXSmall = Template.bind({});
XXSmall.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'xxsmall'
});
export const XSmall = Template.bind({});
XSmall.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'xsmall'
});
export const Small = Template.bind({});
Small.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'small'
});
export const Large = Template.bind({});
Large.args = _objectSpread(_objectSpread({}, Inform.args), {}, {
  size: 'large'
});
export default {
  argTypes,
  component: Status,
  title: 'Status'
};
//# sourceMappingURL=Status.stories.js.map