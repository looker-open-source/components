
import React from 'react';
import { RangeSlider } from './RangeSlider';
const Template = args => React.createElement(RangeSlider, args);
export const Basic = Template.bind({});
Basic.args = {
  value: {
    min: 0,
    max: 33
  },
  options: {}
};
export default {
  title: 'Filters/Stories/RangeSlider',
  component: RangeSlider,
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
};
//# sourceMappingURL=RangeSlider.stories.js.map