

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function AutoResize() {
  const [values, setValues] = useState(['apples']);
  return React.createElement(FieldChips, {
    label: "Auto Resize",
    placeholder: "Auto Resize",
    values: values,
    onChange: setValues,
    maxWidth: "50vw",
    autoResize: true
  });
}
//# sourceMappingURL=AutoResize.js.map