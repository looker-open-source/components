

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputDateRange } from '../InputDateRange';
import ExternalUpdates from './ExternalUpdates';
ExternalUpdates.parameters = {
  storyshots: {
    disable: true
  }
};
export { default as Basic } from './Basic';
export { default as Value } from './Value';
export { default as Error } from './Error';
export { default as Disabled } from './Disabled';
export { default as ReadOnly } from './ReadOnly';
export { ExternalUpdates };
export default {
  argTypes,
  component: InputDateRange,
  title: 'Stories/InputDateRange'
};
//# sourceMappingURL=index.stories.js.map