import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ConstitutionShort } from '../../../fixtures/Constitution';
import { PopoverContent } from './PopoverContent';
export default {
  argTypes,
  component: PopoverContent,
  title: 'PopoverContent'
};

const Template = _ref => {
  let args = _extends({}, _ref);

  return React.createElement(PopoverContent, args, React.createElement(ConstitutionShort, {
    fontSize: "small"
  }));
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const CustomPadding = Template.bind({});
CustomPadding.args = {
  pb: 'u3',
  pt: 'u8',
  px: 'u3'
};
//# sourceMappingURL=PopoverContent.stories.js.map