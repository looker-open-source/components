import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Legend } from './Legend';
export default {
  argTypes,
  component: Legend,
  title: 'Legend'
};

const Template = args => React.createElement(Legend, args);

export const Default = Template.bind({});
Default.args = {
  children: 'I am legend'
};
//# sourceMappingURL=Legend.stories.js.map