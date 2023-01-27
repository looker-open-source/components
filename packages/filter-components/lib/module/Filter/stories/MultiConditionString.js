

import React from 'react';
import { Filter } from '../Filter';
export default function MultiConditionString() {
  return React.createElement(Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "string",
    expression: "%Active%,MV Sport,-Activewear Apparel"
  });
}
//# sourceMappingURL=MultiConditionString.js.map