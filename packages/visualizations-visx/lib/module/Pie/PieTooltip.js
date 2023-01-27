let _ = t => t,
  _t;

import React from 'react';
import { TooltipWithBounds } from '@visx/tooltip';
import { SpaceVertical } from '@looker/components';
import styled from 'styled-components';
import { tooltipStyles } from '../XYTooltip';
import { DLGroup } from '../DLGroup';
export const PieTooltip = styled(({
  tooltipOpen,
  tooltipData,
  tooltipTop,
  tooltipLeft,
  measure,
  dimension,
  className
}) => {
  if (tooltipOpen && tooltipData) {
    return React.createElement(TooltipWithBounds, {
      className: className,
      top: tooltipTop,
      left: tooltipLeft,
      unstyled: true,
      applyPositionStyle: true
    }, React.createElement("dl", null, React.createElement(SpaceVertical, {
      gap: "u3"
    }, React.createElement(DLGroup, {
      value: tooltipData[dimension.name]
    }), React.createElement(DLGroup, {
      label: measure.label || measure.label_short,
      value: tooltipData[measure.name]
    }))));
  }
  return null;
}).withConfig({
  displayName: "PieTooltip",
  componentId: "sc-1vkcacc-0"
})(_t || (_t = _`
  ${0}
`), tooltipStyles);
//# sourceMappingURL=PieTooltip.js.map