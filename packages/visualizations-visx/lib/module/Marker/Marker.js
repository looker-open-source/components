

import React from 'react';
import { useTheme } from 'styled-components';
import { Marker as VisxMarker } from '@visx/marker';
import { Glyph } from '../Glyph';
import { getMarkerFill, getDefaultGlyphSize } from '../utils';
export const Marker = ({
  series,
  id
}) => {
  const theme = useTheme();
  const {
    line_width = 1
  } = series;
  const fill = getMarkerFill(series, theme);
  const size = getDefaultGlyphSize(line_width);
  const top = size / 2;
  const left = size / 2;
  return React.createElement(VisxMarker, {
    id: `${id}`,
    fill: fill,
    markerWidth: size,
    markerHeight: size,
    refX: left,
    refY: top
  }, React.createElement(Glyph, {
    series: series,
    top: top,
    left: left,
    size: size,
    fill: fill
  }));
};
//# sourceMappingURL=Marker.js.map