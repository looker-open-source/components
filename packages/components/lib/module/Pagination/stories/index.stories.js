

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Pagination } from '../Pagination';
export { default as Basic } from './Basic';
export { default as WithDataTable } from './WithDataTable';
export default {
  argTypes,
  component: Pagination,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Pagination'
};
//# sourceMappingURL=index.stories.js.map