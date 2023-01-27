

import React from 'react';
import { SpaceVertical } from '@looker/components';
import { Filter } from '../Filter';
export default function ExpressionTypeOrField() {
  return React.createElement(SpaceVertical, null, React.createElement(Filter, {
    name: "Age",
    expressionType: "number",
    expression: "[0,100]"
  }), React.createElement(Filter, {
    name: "Age",
    type: "field_filter",
    field: {
      is_numeric: true
    },
    expression: "[0,100]"
  }));
}
//# sourceMappingURL=ExpressionTypeOrField.js.map