

import { pickLongestLabel, useMeasuredText } from '@looker/visualizations-adapters';
import { useTheme } from 'styled-components';
import { getLabelContent } from './getLabelContent';
export const MIN_LABEL_SPACE = 90;

export const useLabelWidth = (measureTotal, keyValData, legend) => {
  const {
    type: legendType = 'legend'
  } = legend || {};
  const theme = useTheme();
  const longestLabel = pickLongestLabel(Object.entries(keyValData).map(([key, val]) => {
    return getLabelContent(measureTotal, {
      [key]: val
    }, legend);
  }));
  const {
    width: labelWidth
  } = useMeasuredText(longestLabel, {
    fontSize: legendType === 'legend' ? theme.fontSizes.medium : theme.fontSizes.xsmall,
    fontFamily: theme.fonts.body
  });
  return Math.max(labelWidth + 20, MIN_LABEL_SPACE);
};
//# sourceMappingURL=useLabelWidth.js.map