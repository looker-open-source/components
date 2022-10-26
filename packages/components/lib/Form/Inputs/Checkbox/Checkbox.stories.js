import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Checkbox } from './Checkbox';
export default {
  argTypes,
  component: Checkbox,
  title: 'Checkbox'
};

const Template = args => React.createElement(Checkbox, args);

export const Basic = Template.bind({});
export const Checked = Template.bind({});
Checked.args = {
  checked: true
};
export const MixedChecked = Template.bind({});
MixedChecked.args = {
  checked: 'mixed'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const DisabledChecked = Template.bind({});
DisabledChecked.args = _objectSpread(_objectSpread({}, Checked.args), Disabled.args);
export const DisabledCheckedMixed = Template.bind({});
DisabledCheckedMixed.args = _objectSpread(_objectSpread({}, Disabled.args), MixedChecked.args);
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true
};
export const ReadOnlyChecked = Template.bind({});
ReadOnlyChecked.args = _objectSpread(_objectSpread({}, Checked.args), {}, {
  readOnly: true
});
export const ReadOnlyCheckedMixed = Template.bind({});
ReadOnlyCheckedMixed.args = _objectSpread(_objectSpread({}, MixedChecked.args), {}, {
  readOnly: true
});
//# sourceMappingURL=Checkbox.stories.js.map