

import React from 'react';
import { Grid as VisXGrid } from '@visx/xychart';
import every from 'lodash/every';
export const Grid = ({
  config
}) => {
  const x_axis = (config === null || config === void 0 ? void 0 : config.x_axis) || [];
  const y_axis = (config === null || config === void 0 ? void 0 : config.y_axis) || [];
  const showGridX = every(x_axis, ['gridlines', true]);
  const showGridY = every(y_axis, ['gridlines', true]);
  return React.createElement(VisXGrid, {
    rows: showGridY,
    columns: showGridX
  });
};
//# sourceMappingURL=Grid.js.map