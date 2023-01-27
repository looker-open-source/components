

import React, { useState } from 'react';
import { InputChips } from '../';
export default function Basic() {
  const [values, setValues] = useState(['cheddar', 'gouda']);
  return React.createElement(InputChips, {
    placeholder: "Enter multiple values",
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=Basic.js.map