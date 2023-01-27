

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function FloatingLabel() {
  const [values, setValues] = useState(['apples']);
  return React.createElement(FieldChips, {
    externalLabel: false,
    label: "Floating Label",
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=FloatingLabel.js.map