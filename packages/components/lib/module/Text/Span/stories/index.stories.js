

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Span } from '../Span';
export { default as Basic } from './Basic';
export { default as Bold } from './Bold';
export { default as Color } from './Color';
export { default as TextDecoration } from './TextDecoration';
export { default as TextTransform } from './TextTransform';
export { default as Wrapped } from './Wrapped';
export { default as XXXXLarge } from './XXXXLarge';
export default {
  argTypes,
  component: Span,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Span'
};
//# sourceMappingURL=index.stories.js.map