

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Validation() {
  const [values, setValues] = useState(['apples']);
  return React.createElement(FieldChips, {
    values: values,
    onChange: setValues,
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map