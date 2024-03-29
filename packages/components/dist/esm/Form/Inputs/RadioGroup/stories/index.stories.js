import { defaultArgTypes as argTypes } from '@looker/storybook';
import { RadioGroup } from '../RadioGroup';
export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as DisabledGroup } from './DisabledGroup';
export { default as DisabledItem } from './DisabledItem';
export { default as Inline } from './Inline';
export default {
  argTypes,
  component: RadioGroup,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/RadioGroup'
};
//# sourceMappingURL=index.stories.js.map