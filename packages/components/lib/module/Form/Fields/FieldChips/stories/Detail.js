

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Detail() {
  const [values, setValues] = useState(['apples']);
  return React.createElement(FieldChips, {
    detail: "Detail...",
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=Detail.js.map