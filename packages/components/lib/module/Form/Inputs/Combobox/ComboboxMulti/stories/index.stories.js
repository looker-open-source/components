

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ComboboxMulti } from '../..';
export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as ControlledInputValue } from './ControlledInputValue';
export { default as CustomIndicator } from './CustomIndicator';
export { default as ListLayout } from './ListLayout';
export { default as NoIndicator } from './NoIndicator';
export default {
  argTypes,
  component: ComboboxMulti,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/ComboboxMulti'
};
//# sourceMappingURL=index.stories.js.map