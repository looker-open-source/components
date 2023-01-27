

import { defaultArgTypes as argTypes, disableStoryshot } from '@looker/storybook';
import { ReplaceText } from '../ReplaceText';
import CustomReplace from './CustomReplace';
export { default as Basic } from './Basic';
export { default as CustomReplace } from './CustomReplace';
disableStoryshot(CustomReplace);
export default {
  argTypes,
  component: ReplaceText,
  title: 'Stories/ReplaceText'
};
//# sourceMappingURL=index.stories.js.map