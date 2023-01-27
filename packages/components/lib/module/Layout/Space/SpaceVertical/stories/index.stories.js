

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { SpaceVertical } from '..';
export { default as VerticalBasic } from './VerticalBasic';
export { default as VerticalGap } from './VerticalGap';
export { default as VerticalProperties } from './VerticalProperties';
export { default as VerticalReverse } from './VerticalReverse';
export { default as VerticalStretch } from './VerticalStretch';
export default {
  argTypes,
  component: SpaceVertical,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/SpaceVertical'
};
//# sourceMappingURL=index.stories.js.map