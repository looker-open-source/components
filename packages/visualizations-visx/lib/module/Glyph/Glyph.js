

import React from 'react';
import { useTheme } from 'styled-components';
import { GlyphCircle, GlyphSquare, GlyphDiamond, GlyphTriangle } from '@visx/glyph';
const Glyphs = {
  circle: GlyphCircle,
  square: GlyphSquare,
  diamond: GlyphDiamond,
  triangle: GlyphTriangle,
  'triangle-down': GlyphTriangle
};
export const Glyph = ({
  series,
  top,
  left,
  size,
  fill,
  styleObj,
  stroke
}) => {
  const theme = useTheme();
  const {
    shape = 'circle',
    line_width = 1
  } = series;
  const CurrGlyph = Glyphs[shape];
  const strokeWidth = () => {
    switch (true) {
      case line_width < 3:
        return line_width;
      case line_width < 8:
        return line_width * 0.75;
      default:
        return line_width * 0.5;
    }
  };
  const renderedStroke = stroke || series.color || theme.colors.key;
  return React.createElement(CurrGlyph, {
    top: top,
    left: left,
    size: size,
    fill: fill || theme.colors.key,
    transform: shape === `triangle-down` ? `rotate(180)` : ``,
    style: styleObj || {},
    stroke: stroke === false ? undefined : renderedStroke,
    strokeWidth: strokeWidth()
  });
};
//# sourceMappingURL=Glyph.js.map