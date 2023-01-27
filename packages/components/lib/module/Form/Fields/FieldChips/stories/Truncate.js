

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Truncate() {
  const [values, setValues] = useState(['A very long token that will truncate']);
  return React.createElement(FieldChips, {
    label: "Truncate",
    values: values,
    onChange: setValues,
    width: 250
  });
}
//# sourceMappingURL=Truncate.js.map