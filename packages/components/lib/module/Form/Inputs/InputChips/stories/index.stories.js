

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputChips } from '../InputChips';
export { default as AutoResize } from './AutoResize';
export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as Disable } from './Disable';
export { default as DisabledWithoutValues } from './DisabledWithoutValues';
export { default as FormatInput } from './FormatInput';
export { default as FormatInputFalse } from './FormatInputFalse';
export { default as IsClearable } from './IsClearable';
export { default as Placeholder } from './Placeholder';
export { default as ReadOnly } from './ReadOnly';
export { default as RemoveOnBackspace } from './RemoveOnBackspace';
export { default as Summary } from './Summary';
export { default as Validation } from './Validation';
export default {
  argTypes,
  component: InputChips,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/InputChips'
};
//# sourceMappingURL=index.stories.js.map