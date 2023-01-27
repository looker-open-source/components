

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Tabs2 } from '../Tabs2';
export { default as Basic } from './Basic';
export { default as Distributed } from './Distributed';
export { default as DefaultTab } from './DefaultTab';
export { default as Controlled } from './Controlled';
export { default as Scrolling } from './Scrolling';
export { default as Disabled } from './Disabled';
export { default as StateChanges } from './StateChanges';
export default {
  argTypes,
  component: Tabs2,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Tabs2'
};
//# sourceMappingURL=index.stories.js.map