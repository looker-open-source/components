

import React, { useState } from 'react';
import { Paragraph, SpaceVertical } from '@looker/components';
import { DashboardFilter } from '../DashboardFilter';
export default function ExpressionOnChange() {
  const [expression, setExpression] = useState('[0,100]');
  return React.createElement(SpaceVertical, null, React.createElement(DashboardFilter, {
    filter: {
      field: {
        is_numeric: true
      },
      id: '1',
      name: 'Age',
      type: 'field_filter'
    },
    expression: expression,
    onChange: setExpression
  }), React.createElement(Paragraph, null, React.createElement("strong", null, "Current filter expression:"), " ", expression));
}
//# sourceMappingURL=ExpressionOnChange.js.map