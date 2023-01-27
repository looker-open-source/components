

import { defaultArgTypes as argTypes, disableStoryshot } from '@looker/storybook';
import { InputFilters } from '../';
import Basic from './Basic';
import CustomFilter from './CustomFilter';
import HideFilterIcon from './HideFilterIcon';
disableStoryshot(Basic, CustomFilter, HideFilterIcon);
export { Basic, CustomFilter, HideFilterIcon };
export { default as FilterSelected } from './FilterSelected';
export default {
  argTypes,
  component: InputFilters,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  title: 'Stories/InputFilters'
};
//# sourceMappingURL=index.stories.js.map