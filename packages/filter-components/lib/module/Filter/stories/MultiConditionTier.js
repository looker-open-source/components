

import React from 'react';
import { Filter } from '../Filter';
export default function MultiConditionTier() {
  return React.createElement(Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "tier",
    expression: "20 to 29,{{ _user_attributes['locale'] }}"
  });
}
//# sourceMappingURL=MultiConditionTier.js.map