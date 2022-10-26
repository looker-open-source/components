import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { options } from '../../../fixtures/CheckboxRadio';
import { FieldRadioGroup } from './FieldRadioGroup';
export default {
  argTypes,
  component: FieldRadioGroup,
  title: 'FieldRadioGroup'
};

const Template = args => React.createElement(FieldRadioGroup, _extends({}, args, {
  autoFocus: true,
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
//# sourceMappingURL=FieldRadioGroup.stories.js.map