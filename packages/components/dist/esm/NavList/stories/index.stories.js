import { defaultArgTypes as argTypes } from '@looker/storybook';
import { NavList } from '../NavList';
export { default as Basic } from './Basic';
export { default as MixedNavigation } from './MixedNavigation';
export { default as KeyboardNavigation } from './KeyboardNavigation';
export default {
  argTypes,
  component: NavList,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/NavList'
};
//# sourceMappingURL=index.stories.js.map