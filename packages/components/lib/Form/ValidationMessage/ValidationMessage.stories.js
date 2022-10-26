import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ValidationMessage } from './ValidationMessage';
export default {
  argTypes,
  component: ValidationMessage,
  title: 'ValidationMessage'
};

const Template = args => React.createElement(ValidationMessage, args);

export const Default = Template.bind({});
Default.args = {
  message: 'Error!',
  type: 'error'
};
//# sourceMappingURL=ValidationMessage.stories.js.map