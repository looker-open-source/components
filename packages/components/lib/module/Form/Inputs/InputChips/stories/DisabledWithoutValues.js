

import React, { useState } from 'react';
import { InputChips } from '..';
export default function DisabledWithoutValues() {
  const [values, setValues] = useState([]);
  return React.createElement(InputChips, {
    disabled: true,
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=DisabledWithoutValues.js.map