import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InlineInputText } from './InlineInputText';
export default {
  argTypes,
  component: InlineInputText,
  title: 'InlineInputText'
};

const Template = args => React.createElement(InlineInputText, args);

export const Basic = Template.bind({});
export const Value = Template.bind({});
Value.args = {
  value: 'Some text here'
};
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder'
};
export const Simple = Template.bind({});
Simple.args = {
  simple: true,
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
export const OverflowHiddenInlineInputText = () => React.createElement("div", {
  style: {
    border: '1px solid',
    overflow: 'hidden',
    width: '100px'
  }
}, React.createElement(InlineInputText, {
  value: "Long example value that should require scrolling to reach"
}));
OverflowHiddenInlineInputText.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=InlineInputText.stories.js.map