import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { AutoGraph, PieChart, TableChart } from '@styled-icons/material';
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Select } from '../Select';
import { options1kGrouped } from './options1k';

const Template = args => React.createElement(Select, args);

export const Basic = Template.bind({});
Basic.args = {
  options: [{
    label: 'Cheddar',
    value: 'cheddar'
  }, {
    label: 'Gouda',
    value: 'gouda'
  }, {
    label: 'Swiss',
    value: 'swiss'
  }]
};
export const Placeholder = Template.bind({});
Placeholder.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  placeholder: 'Placeholder'
});
export const AutoResize = Template.bind({});
AutoResize.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  autoResize: true
});
export const AutoResizePlaceholder = Template.bind({});
AutoResizePlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  autoResize: true
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const DisabledPlaceholder = Template.bind({});
DisabledPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  disabled: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationType: 'error'
});
export const NoErrorIcon = Template.bind({});
NoErrorIcon.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  noErrorIcon: true
});
export const ErrorPlaceholder = Template.bind({});
ErrorPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  validationType: 'error'
});
export const Value = Template.bind({});
Value.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: 'gouda'
});
export const ErrorValue = Template.bind({});
ErrorValue.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  validationType: 'error'
});
export const DefaultValue = Template.bind({});
DefaultValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'swiss'
});
export const Clearable = Template.bind({});
Clearable.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isClearable: true
});
export const ClearableValue = Template.bind({});
ClearableValue.args = _objectSpread(_objectSpread({}, Clearable.args), {}, {
  value: 'gouda'
});
export const ClearableError = Template.bind({});
ClearableError.args = _objectSpread(_objectSpread({}, ClearableValue.args), {}, {
  validationType: 'error'
});
export const Icon = Template.bind({});
Icon.args = {
  options: [{
    icon: React.createElement(AutoGraph, null),
    label: 'Bar',
    value: 'bar'
  }, {
    icon: React.createElement(PieChart, null),
    label: 'Pie',
    value: 'pie'
  }, {
    icon: React.createElement(TableChart, null),
    label: 'Table',
    value: 'table'
  }],
  value: 'pie'
};
export const GroupedWindowing = Template.bind({});
GroupedWindowing.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  options: options1kGrouped,
  width: 300
});
GroupedWindowing.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: Select,
  title: 'Select'
};
//# sourceMappingURL=Select.stories.js.map