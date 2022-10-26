import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { AccountCircle } from '@styled-icons/material-outlined';
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Status } from '../../Status';
import { Paragraph } from '../../Text';
import { Space } from './Space';
export default {
  argTypes,
  component: Space,
  title: 'Space'
};

const Template = args => React.createElement(Space, args, React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));

export const Basic = Template.bind({});
Basic.args = {};
export const Reverse = Template.bind({});
Reverse.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  reverse: true
});
export const SpaceCrush = () => React.createElement(Space, null, React.createElement(Icon, {
  icon: React.createElement(AccountCircle, null),
  size: "large"
}), React.createElement(Status, {
  intent: "inform"
}), React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
//# sourceMappingURL=Space.stories.js.map