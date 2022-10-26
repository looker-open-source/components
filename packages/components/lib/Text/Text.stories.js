import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Text } from './Text';

const Template = args => React.createElement(Text, args);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Text Example'
};
export const Nesting = () => React.createElement("div", {
  style: {
    color: '#c00'
  }
}, React.createElement(Text, null, "This text should be red"));
export const LineHeight = () => React.createElement("div", {
  style: {
    border: '1px solid #000'
  }
}, React.createElement(Text, null, "This text should be 1.5rem line height"));
export default {
  argTypes,
  component: Text,
  title: 'Text'
};
//# sourceMappingURL=Text.stories.js.map