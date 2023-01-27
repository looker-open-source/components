

import React from 'react';
import { Filter } from '../Filter';
export default function Suggestions() {
  return React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    suggestions: ['complete', 'pending', 'cancelled']
  });
}
//# sourceMappingURL=Suggestions.js.map