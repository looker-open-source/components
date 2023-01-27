

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { CheckboxGroup } from '../CheckboxGroup';
export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as DisabledGroup } from './DisabledGroup';
export { default as DisabledItem } from './DisabledItem';
export { default as Inline } from './Inline';
export default {
  argTypes,
  component: CheckboxGroup,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/CheckboxGroup'
};
//# sourceMappingURL=index.stories.js.map