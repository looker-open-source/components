import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Radio } from './Radio';
export default {
  argTypes,
  component: Radio,
  title: 'Radio'
};

const Template = args => React.createElement(Radio, args);

export const Basic = Template.bind({});
export const Checked = Template.bind({});
Checked.args = {
  checked: true
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const DisabledChecked = Template.bind({});
DisabledChecked.args = _objectSpread(_objectSpread({}, Disabled.args), Checked.args);
//# sourceMappingURL=Radio.stories.js.map