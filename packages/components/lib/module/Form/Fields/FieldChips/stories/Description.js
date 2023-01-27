

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Description() {
  const [values, setValues] = useState(['apples']);
  return React.createElement(FieldChips, {
    description: "A nice description",
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=Description.js.map