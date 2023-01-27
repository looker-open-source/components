import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { mockPivotedQuery } from '@looker/visualizations-adapters';
import { Visualization } from '../';
export default function HorizontalScroll() {
  return React.createElement(Visualization, _extends({}, mockPivotedQuery, {
    height: 600,
    config: {
      type: 'table',
      show_totals: true
    }
  }));
}
//# sourceMappingURL=TableHorizontalScroll.js.map