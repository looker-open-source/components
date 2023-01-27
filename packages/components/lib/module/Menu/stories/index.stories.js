

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Menu } from '../Menu';
export { default as Basic } from './Basic';
export { default as Density } from './Density';
export { default as WithTooltip } from './WithTooltip';
export { default as Placement } from './Placement';
export { default as Nested } from './Nested';
export { default as Controlled } from './Controlled';
export { default as Hover } from './Hover';
export { default as IconPlaceholder } from './IconPlaceholder';
export { default as HeadingDivider } from './HeadingDivider';
export { default as WithDialog } from './WithDialog';
export default {
  argTypes,
  component: Menu,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Menu'
};
//# sourceMappingURL=index.stories.js.map