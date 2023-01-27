

import { PIE_SLICE_ZOOM } from './pieConstants';
import { getConnectorLength } from './getConnectorLength';

export const getChartGeometry = ({
  width,
  height,
  labelWidth,
  legendType: _legendType = 'legend'
}) => {
  const minChartSize = _legendType === 'legend' ? 50 : 350;

  const maxConnectorLength = getConnectorLength(0, 1) * 2;

  const maxDimension = Math.max(width, height, minChartSize);

  const hoverMargin = Math.ceil(maxDimension - maxDimension / PIE_SLICE_ZOOM);

  const canvasCenter = (maxDimension - hoverMargin) / 2;

  const padding = _legendType === 'labels' ? Math.max(labelWidth, maxConnectorLength) : 0;

  const outerRadius = canvasCenter - hoverMargin - padding;
  return {
    canvasW: maxDimension,
    canvasH: maxDimension - padding,
    pieCenterX: canvasCenter,
    pieCenterY: canvasCenter - padding / 2,
    outerRadius
  };
};
//# sourceMappingURL=getChartGeometry.js.map