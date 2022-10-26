import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../Button';
import { SpaceVertical } from './SpaceVertical';
export default {
  argTypes,
  component: SpaceVertical,
  title: 'SpaceVertical'
};

const Template = args => React.createElement(SpaceVertical, args, React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));

export const Basic = Template.bind({});
Basic.args = {};
export const Reverse = Template.bind({});
Reverse.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  reverse: true
});
export const Stretch = Template.bind({});
Stretch.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  align: 'stretch'
});
//# sourceMappingURL=SpaceVertical.stories.js.map