

import React from 'react';
import { Filter } from '../Filter';
export default function MultiConditionDate() {
  return React.createElement(Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "date",
    expression: "this week,last week, next week"
  });
}
//# sourceMappingURL=MultiConditionDate.js.map