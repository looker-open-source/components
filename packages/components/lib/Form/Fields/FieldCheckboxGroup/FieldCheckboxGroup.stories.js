import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { options } from '../../../fixtures/CheckboxRadio';
import { Box2 } from '../../../Layout';
import { FieldCheckboxGroup } from './FieldCheckboxGroup';
export default {
  argTypes,
  component: FieldCheckboxGroup,
  title: 'FieldCheckboxGroup'
};
const defaultValueCheckbox = ['swiss', 'swiss-2', 'swiss-3', 'cheddar', 'cheddar-2', 'cheddar-3'];

const Template = args => React.createElement(FieldCheckboxGroup, _extends({}, args, {
  autoFocus: true,
  defaultValue: defaultValueCheckbox,
  label: "Cheeses",
  description: "Pick all your cheeses",
  options: options
}));

export const Basic = Template.bind({});
Basic.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const Required = Template.bind({});
Required.args = {
  required: true
};
export const Inline = Template.bind({});
Inline.args = {
  inline: true
};
export const Error = Template.bind({});
Error.args = {
  validationMessage: {
    message: 'Select at least 1 cheese',
    type: 'error'
  }
};
export const ErrorInline = Template.bind({});
ErrorInline.args = {
  inline: true,
  required: true,
  validationMessage: {
    message: 'Select at least 1 cheese',
    type: 'error'
  }
};
const longOption = {
  label: `All legislative Powers herein granted shall be vested in a Congress of the
  United States, which shall consist of a Senate and House of
  Representatives.`,
  value: 'long'
};
export const Truncate = () => React.createElement(Box2, {
  width: 300
}, React.createElement(FieldCheckboxGroup, {
  defaultValue: defaultValueCheckbox,
  label: "Cheeses",
  options: [longOption, ...options]
}));
//# sourceMappingURL=FieldCheckboxGroup.stories.js.map