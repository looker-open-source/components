
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldSlider } from '../../FieldSlider';
export { default as Basic } from './Basic';
export { default as Disabled } from './Disabled';
export { default as Steps } from './Steps';
export { default as FloatingSteps } from './FloatingSteps';
export { default as Controlled } from './Controlled';
export default {
  argTypes,
  component: FieldSlider,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/FieldSlider'
};
//# sourceMappingURL=index.stories.js.map