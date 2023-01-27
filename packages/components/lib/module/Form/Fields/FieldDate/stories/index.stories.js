
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldDate } from '../FieldDate';
export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as ControlledFloatingLabel } from './ControlledFloatingLabel';
export { default as ControlledFloatingLabelNoValue } from './ControlledFloatingLabelNoValue';
export { default as Error } from './Error';
export { default as FloatingLabel } from './FloatingLabel';
export { default as FloatingLabelNoValue } from './FloatingLabelNoDefaultValue';
export { default as Required } from './Required';
export default {
  argTypes,
  component: FieldDate,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/FieldDate'
};
//# sourceMappingURL=index.stories.js.map