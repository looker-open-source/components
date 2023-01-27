

import React, { useState } from 'react';
import { DashboardFilter } from '../DashboardFilter';
export default function Suggestions() {
  const [expression, setExpression] = useState('');
  return React.createElement(DashboardFilter, {
    filter: {
      field: {
        suggestable: true
      },
      name: 'Status',
      type: 'field_filter',
      ui_config: {
        type: 'button_group'
      },
      allow_multiple_values: true
    },
    sdk: {
      ok: value => value,
      get: () => Promise.resolve({
        suggestions: ['complete', 'pending', 'cancelled']
      })
    },
    expression: expression,
    onChange: setExpression
  });
}
//# sourceMappingURL=Suggestions.js.map