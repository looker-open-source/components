import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Form } from '..';
export { default as Basic } from './Basic';
export { default as Validation } from './Validation';
export default {
  argTypes,
  component: Form,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Form'
};
//# sourceMappingURL=index.stories.js.map