import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Space } from '../../../../Layout';
import { SelectMulti } from '../SelectMulti';
import { options1kGrouped } from './options1k';

const Template = args => React.createElement(SelectMulti, args);

const cheeses = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Swiss',
  value: 'swiss'
}];
export const Basic = Template.bind({});
Basic.args = {
  options: cheeses
};
export const Placeholder = Template.bind({});
Placeholder.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  placeholder: 'Placeholder'
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
export const ErrorPlaceholder = Template.bind({});
ErrorPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  validationType: 'error'
});
export const NoErrorIcon = Template.bind({});
NoErrorIcon.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  noErrorIcon: true
});
export const Values = Template.bind({});
Values.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  values: ['cheddar', 'gouda']
});
export const DefaultValues = Template.bind({});
DefaultValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValues: ['gouda', 'swiss']
});
export const WrappingValues = Template.bind({});
WrappingValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValues: ['cheddar', 'gouda', 'swiss'],
  width: 250
});
export const ErrorValues = Template.bind({});
ErrorValues.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  values: ['cheddar', 'gouda']
});
export const ErrorWrappingValues = Template.bind({});
ErrorWrappingValues.args = _objectSpread(_objectSpread({}, WrappingValues.args), {}, {
  defaultValues: ['cheddar', 'gouda', 'swiss'],
  validationType: 'error'
});
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
export const FormatInputValuesFalse = () => {
  const [values, setValues] = useState();
  return React.createElement(Space, null, React.createElement(SelectMulti, {
    values: values,
    onChange: setValues,
    options: cheeses,
    freeInput: true,
    formatInputValue: false,
    placeholder: "Free input values are not trimmed",
    width: 400
  }), React.createElement("pre", {
    "data-testid": "pre"
  }, JSON.stringify(values)));
};
FormatInputValuesFalse.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: SelectMulti,
  title: 'SelectMulti'
};
//# sourceMappingURL=SelectMulti.stories.js.map