import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InlineTextArea } from './InlineTextArea';
export default {
  argTypes,
  component: InlineTextArea,
  title: 'InlineTextArea'
};

const Template = args => React.createElement(InlineTextArea, args);

export const Basic = Template.bind({});
export const Value = Template.bind({});
Value.args = {
  value: 'Some text here'
};
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder'
};
export const UnderlineOnlyOnHover = Template.bind({});
UnderlineOnlyOnHover.args = {
  underlineOnlyOnHover: true,
  value: 'Some text here'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: "You can't change me."
};
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  value: "You can't change me."
};
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=InlineTextArea.stories.js.map