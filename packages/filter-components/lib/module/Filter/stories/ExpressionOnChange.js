

import React, { useState } from 'react';
import { Paragraph, SpaceVertical } from '@looker/components';
import { Filter } from '../Filter';
export default function ExpressionOnChange() {
  const [expression, setExpression] = useState('[0,100]');
  const handleChange = value => {
    setExpression(value.expression);
  };
  return React.createElement(SpaceVertical, null, React.createElement(Filter, {
    name: "Age",
    expressionType: "number",
    expression: expression,
    onChange: handleChange
  }), React.createElement(Paragraph, null, React.createElement("strong", null, "Current filter expression:"), " ", expression));
}
//# sourceMappingURL=ExpressionOnChange.js.map