

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Layout } from '..';
export { default as Basic } from './Basic';
export { default as FixedWithFooterAndHeaderShadow } from './FixedWithFooterAndHeaderShadow';
export { default as ScrollAllAreasTogetherDefault } from './ScrollAllAreasTogetherDefault';
export { default as ScrollIndependently } from './ScrollIndependently';
export { default as ScrollSelectedAreas } from './ScrollSelectedAreas';
export { default as WhitespaceRepro } from './WhitespaceRepro';
export default {
  argTypes,
  component: Layout,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Layout'
};
//# sourceMappingURL=index.stories.js.map