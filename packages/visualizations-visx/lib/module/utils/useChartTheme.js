

import { useTheme } from 'styled-components';
import isArray from 'lodash/isArray';
import compact from 'lodash/compact';
import { buildChartTheme } from '@visx/xychart';
export const useChartTheme = series => {
  const theme = useTheme();
  const seriesList = series && isArray(series) ? series : Object.values(series || {});
  const scheme = compact(seriesList.map(s => s.visible && s.color));
  const chartTheme = buildChartTheme({
    backgroundColor: theme.colors.background,
    colors: scheme.length ? scheme : [theme.colors.key],
    gridColor: theme.colors.ui2,
    gridColorDark: theme.colors.text5,
    svgLabelBig: {
      fill: theme.colors.text5
    },
    svgLabelSmall: {
      fill: theme.colors.text5
    },
    tickLength: 8
  });
  return chartTheme;
};
//# sourceMappingURL=useChartTheme.js.map