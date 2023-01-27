

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputTimeSelect } from '../InputTimeSelect';
export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as DefaultValue } from './DefaultValue';
export { default as Intervals } from './Intervals';
export { default as TimeFormatting } from './TimeFormatting';
export default {
  argTypes,
  component: InputTimeSelect,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/InputTimeSelect'
};
//# sourceMappingURL=index.stories.js.map