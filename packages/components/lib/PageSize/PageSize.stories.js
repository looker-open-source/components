import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { PageSize } from './PageSize';

const Template = args => React.createElement(PageSize, args);

export const Basic = Template.bind({});
Basic.args = {
  onChange: value => alert(`You chose ${value} per page`),
  total: 100,
  value: 100
};
export const AlwaysVisible = () => {
  const [value, setValue] = useState(100);
  return React.createElement(PageSize, {
    alwaysVisible: true,
    total: 3,
    value: value,
    onChange: setValue
  });
};
export default {
  argTypes,
  component: PageSize,
  title: 'PageSize'
};
//# sourceMappingURL=PageSize.stories.js.map