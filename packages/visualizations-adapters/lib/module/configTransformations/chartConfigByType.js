

import { barPositioning } from './barPositioning';
import { linePositioning } from './linePositioning';
import { legendPosition } from './legendPosition';
import { legendType } from './legendType';
import { legendValue } from './legendValue';
import { renderNullValues } from './renderNullValues';
import { seriesCellVis } from './seriesCellVis';
import { seriesColors } from './seriesColors';
import { seriesLabels } from './seriesLabels';
import { seriesLineWidth } from './seriesLineWidth';
import { dimensionSeriesColors } from './dimensionSeriesColors';
import { seriesPointShape } from './seriesPointShape';
import { seriesPointStyle } from './seriesPointStyle';
import { seriesSize } from './seriesSize';
import { seriesVisible } from './seriesVisible';
import { tooltips } from './tooltips';
import { truncateHeader } from './truncateHeader';
import { truncateText } from './truncateText';
import { xAxis } from './xAxis';
import { yAxis } from './yAxis';
import { yAxisRange } from './yAxisRange';
import { seriesValueFormat } from './seriesValueFormat';
import { showTotals } from './showTotals';
import { showRowTotals } from './showRowTotals';
export const commonCartesianDefaults = [seriesLabels, seriesColors, seriesValueFormat, seriesVisible, legendPosition, tooltips, xAxis, yAxis];
export const commonLineDefaults = [seriesPointStyle, seriesPointShape, renderNullValues];
export const chartConfigByType = {
  area: [...commonLineDefaults, ...commonCartesianDefaults, linePositioning, seriesLineWidth],
  bar: [barPositioning, ...commonCartesianDefaults],
  column: [barPositioning, ...commonCartesianDefaults],
  default: [...commonCartesianDefaults],
  table: [seriesCellVis, seriesLabels, seriesVisible, truncateHeader, truncateText, seriesValueFormat, seriesColors, showTotals, showRowTotals],
  line: [...commonLineDefaults, ...commonCartesianDefaults, seriesLineWidth],
  pie: [legendPosition, legendType, legendValue, dimensionSeriesColors, tooltips],
  scatter: [...commonLineDefaults, ...commonCartesianDefaults, seriesLineWidth, seriesSize, renderNullValues],
  single_value: [seriesLabels, seriesColors, seriesValueFormat],
  sparkline: [seriesColors, seriesLineWidth, renderNullValues, yAxisRange]
};
//# sourceMappingURL=chartConfigByType.js.map