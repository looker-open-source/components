

import React, { useState } from 'react';
import { InputChips } from '../';
export default function IsClearable() {
  const [values, setValues] = useState(['cheddar', 'gouda']);
  return React.createElement(InputChips, {
    isClearable: false,
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=IsClearable.js.map