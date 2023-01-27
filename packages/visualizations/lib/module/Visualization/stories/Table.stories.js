

import { Visualization } from '../Visualization';
import { VIEWPORT_MAP } from '@looker/components';
import WrappedText from './TableWrappedText';
import TruncatedText from './TableTruncatedText';
TruncatedText.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP
  }
};
WrappedText.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP
  }
};
export default {
  component: Visualization,
  title: 'Visualizations/Stories/Table'
};
export { default as Basic } from './TableBasic';
export { default as HorizontalScroll } from './TableHorizontalScroll';
export { default as PivotedTable } from './TablePivot';
export { default as MultiSort } from './TableMultiSort';
export { WrappedText, TruncatedText };
//# sourceMappingURL=Table.stories.js.map