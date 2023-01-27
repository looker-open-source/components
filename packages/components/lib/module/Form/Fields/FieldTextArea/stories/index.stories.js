

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldTextArea } from '../FieldTextArea';
export { default as Basic } from './Basic';
export { default as Controlled } from './Basic';
export { default as DefaultValue } from './DefaultValue';
export { default as DetailDescription } from './DetailDescription';
export { default as Disabled } from './Disabled';
export { default as FloatingLabel } from './FloatingLabel';
export { default as FloatingDefaultValueLabel } from './FloatingLabelDefaultValue';
export { default as Inline } from './Inline';
export { default as NoResize } from './NoResize';
export { default as Required } from './Required';
export { default as ValidationMessage } from './ValidationMessage';
export default {
  argTypes,
  component: FieldTextArea,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/FieldTextArea'
};
//# sourceMappingURL=index.stories.js.map