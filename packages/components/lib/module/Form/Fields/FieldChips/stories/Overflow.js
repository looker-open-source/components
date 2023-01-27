

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Overflow() {
  const [values, setValues] = useState(['California', 'Wyoming', 'Nevada', 'Wisconsin', 'Mississippi', 'Missouri', 'New York', 'New Jersey']);
  return React.createElement(FieldChips, {
    label: "Overflow",
    values: values,
    onChange: setValues,
    width: 200,
    maxHeight: 145
  });
}
//# sourceMappingURL=Overflow.js.map