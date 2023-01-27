

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { SelectMulti } from '../SelectMulti';
export { default as Basic } from './Basic';
export { default as CloseOnSelect } from './CloseOnSelect';
export { default as FreeInput } from './FreeInput';
export { default as ClearIconLabel } from './ClearIconLabel';
export default {
  argTypes,
  component: SelectMulti,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/SelectMulti'
};
//# sourceMappingURL=index.stories.js.map