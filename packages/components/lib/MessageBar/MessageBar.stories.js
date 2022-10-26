import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Delete, GridView } from '@styled-icons/material';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../Button';
import { MessageBar } from './MessageBar';

const Template = args => React.createElement(MessageBar, args);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Hey! This is a message to you.'
};
export const Warn = Template.bind({});
Warn.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'warn'
});
export const Critical = Template.bind({});
Critical.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'critical'
});
export const Positive = Template.bind({});
Positive.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'positive'
});
export const Inform = Template.bind({});
Inform.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  intent: 'inform'
});
export const NoActions = Template.bind({});
NoActions.args = _objectSpread(_objectSpread({}, Critical.args), {}, {
  noActions: true
});
export const CustomActions = Template.bind({});
CustomActions.args = _objectSpread(_objectSpread({}, Positive.args), {}, {
  primaryAction: 'Do Thing',
  secondaryAction: 'Dismiss'
});
export const CustomActionsDeux = Template.bind({});
CustomActionsDeux.args = _objectSpread(_objectSpread({}, Positive.args), {}, {
  primaryAction: React.createElement(Button, {
    onClick: () => alert('Primary Action Taken'),
    iconBefore: React.createElement(Delete, null)
  }, "Dismiss"),
  secondaryAction: React.createElement(Button, {
    onClick: () => alert('Secondary Action Taken'),
    color: "neutral",
    iconBefore: React.createElement(GridView, null)
  }, "Return To Menu")
});
export default {
  argTypes,
  component: MessageBar,
  title: 'MessageBar'
};
//# sourceMappingURL=MessageBar.stories.js.map