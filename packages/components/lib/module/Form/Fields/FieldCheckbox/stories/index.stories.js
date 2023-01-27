

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldCheckbox } from '../../FieldCheckbox';
export { default as Basic } from './Basic';
export { default as DetailDescription } from './DetailDescription';
export { default as Checked } from './Checked';
export { default as Disabled } from './Disabled';
export { default as ReadOnly } from './ReadOnly';
export { default as Validation } from './Validation';
export { default as Required } from './Required';
export default {
  argTypes,
  component: FieldCheckbox,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/FieldCheckbox'
};
//# sourceMappingURL=index.stories.js.map