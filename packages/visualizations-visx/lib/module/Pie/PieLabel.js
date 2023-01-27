

import React from 'react';
import { Annotation, Label, Connector } from '@visx/annotation';
import { pointRadial } from 'd3-shape';
import { useTheme } from 'styled-components';
import { getConnectorLength } from './getConnectorLength';
export const PieLabel = ({
  arc,
  outerRadius,
  labelContent,
  datumColor
}) => {
  const theme = useTheme();
  const {
    startAngle,
    endAngle
  } = arc;
  const averageAngle = (startAngle + endAngle) / 2;
  const [connectorX, connectorY] = pointRadial(averageAngle, outerRadius);
  const connectorLength = getConnectorLength(averageAngle, outerRadius);
  const [labelX, labelY] = pointRadial(averageAngle, connectorLength);
  const ANCHOR_POSITION = connectorX > 0 ? 'start' : 'end';
  return React.createElement(Annotation, {
    x: connectorX,
    y: connectorY,
    dx: labelX,
    dy: labelY
  }, React.createElement(Connector, {
    stroke: datumColor,
    pathProps: {
      strokeWidth: 2
    },
    type: "line"
  }), React.createElement(Label, {
    titleFontSize: theme.fontSizes.xsmall,
    backgroundFill: "transparent",
    backgroundPadding: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    showAnchorLine: false,
    horizontalAnchor: ANCHOR_POSITION,
    verticalAnchor: "middle",
    title: labelContent
  }));
};
//# sourceMappingURL=PieLabel.js.map