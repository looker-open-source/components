

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { PopoverContent } from '../PopoverContent';
export { default as Basic } from './Basic';
export { default as CustomPadding } from './CustomPadding';
export { default as Scroll } from './Scroll';
export default {
  argTypes,
  component: PopoverContent,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/PopoverContent'
};
//# sourceMappingURL=index.stories.js.map