import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Space } from '..';
export { default as Around } from './Around';
export { default as Basic } from './Basic';
export { default as Between } from './Between';
export { default as Evenly } from './Evenly';
export { default as Gap } from './Gap';
export { default as Properties } from './Properties';
export { default as Reverse } from './Reverse';
export default {
  argTypes,
  component: Space,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    },
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Space'
};
//# sourceMappingURL=index.stories.js.map