function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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