

import { defaultArgTypes as argTypes, disableStoryshot } from '@looker/storybook';
import { InlineInputText } from '../InlineInputText';
import ReadOnly from './ReadOnly';
import OverflowHiddenInlineInputText from './OverflowHiddenInlineInputText';
export { default as Basic } from './Basic';
export { default as Value } from './Value';
export { default as Placeholder } from './Placeholder';
export { default as Simple } from './Simple';
export { default as Disabled } from './Disabled';
disableStoryshot(ReadOnly, OverflowHiddenInlineInputText);
export { ReadOnly, OverflowHiddenInlineInputText };
export default {
  argTypes,
  component: InlineInputText,
  title: 'Stories/InlineInputText'
};
//# sourceMappingURL=index.stories.js.map