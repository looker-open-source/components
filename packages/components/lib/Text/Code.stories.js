import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Code } from './Code';
export default {
  argTypes,
  component: Code,
  title: 'Code'
};

const Template = args => React.createElement(Code, args);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a simple example of some code'
};
//# sourceMappingURL=Code.stories.js.map