

import React from 'react';
import { Axis } from '@visx/xychart';
export const XAxisDate = ({
  label,
  showTicks
}) => React.createElement(Axis, {
  hideTicks: !showTicks,
  label: label,
  labelOffset: showTicks ? undefined : 0,
  orientation: "bottom",
  tickValues: showTicks ? undefined : []
});
//# sourceMappingURL=XAxisDate.js.map