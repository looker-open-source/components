

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Text } from '../Text';
export { default as Basic } from './Basic';
export { default as LineHeight } from './LineHeight';
export { default as Nesting } from './Nesting';
export default {
  argTypes,
  component: Text,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Text'
};
//# sourceMappingURL=index.stories.js.map