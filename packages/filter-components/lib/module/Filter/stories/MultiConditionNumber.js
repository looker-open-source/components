

import React from 'react';
import { Filter } from '../Filter';
export default function MultiConditionNumber() {
  return React.createElement(Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "number",
    expression: "[0,20],>30"
  });
}
//# sourceMappingURL=MultiConditionNumber.js.map