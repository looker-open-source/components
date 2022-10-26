import React from 'react';
import { Token } from './Token';
export default {
  title: 'Filters / Token',
  component: Token
};

const Template = args => {
  return React.createElement(Token, args);
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'is any time'
};
export const IsEmpty = Template.bind({});
IsEmpty.args = {
  label: 'More',
  isEmpty: true
};
export const Long = Template.bind({});
Long.args = {
  label: 'is from 2022/01/01 until 2022/01/31 or is from 2022/03/01 until 2022/03/31'
};
//# sourceMappingURL=Token.stories.js.map