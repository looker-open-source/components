

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Heading } from '../Heading';
export { default as Default } from './Default';
export { default as Color } from './Color';
export { default as FontSize } from './FontSize';
export { default as FontWeight } from './FontWeight';
export { default as MultilineTruncate } from './MultilineTruncate';
export { default as Level } from './Level';
export { default as Truncate } from './Truncate';
export { default as TextAlign } from './TextAlign';
export { default as TextTransform } from './TextTransform';
export default {
  argTypes,
  component: Heading,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Heading'
};
//# sourceMappingURL=index.stories.js.map