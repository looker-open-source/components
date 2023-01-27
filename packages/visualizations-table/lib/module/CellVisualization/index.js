let _ = t => t,
  _t;

import React from 'react';
import styled, { useTheme } from 'styled-components';
import { deriveColorBlend } from '@looker/visualizations-adapters';
const COLOR_BAND_COUNT = 10;
export const CellVisualization = props => {
  const {
    colors
  } = useTheme();
  const {
    max,
    value,
    color = colors.measure
  } = props;
  if (max === 0) {
    return null;
  }
  const cellVisWidth = value / max;

  const colorBands = deriveColorBlend(color, colors.background, COLOR_BAND_COUNT);
  const colorIndex = Math.round((1 - cellVisWidth) * COLOR_BAND_COUNT);
  return React.createElement(SingleBar, {
    color: colorBands[colorIndex],
    width: cellVisWidth,
    "data-testid": "single-bar"
  });
};
const SingleBar = styled.div.attrs(({
  width,
  color
}) => ({
  style: {
    flex: width,
    background: color
  }
}))(_t || (_t = _`
  height: ${0};
`), ({
  theme
}) => theme.sizes.small);
//# sourceMappingURL=index.js.map