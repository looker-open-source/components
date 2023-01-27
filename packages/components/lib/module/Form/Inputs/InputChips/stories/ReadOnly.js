

import React, { useState } from 'react';
import { InputChips } from '../';
export default function ReadOnly() {
  const [values, setValues] = useState(['you', "can't", 'change', 'me', 'here']);
  return React.createElement(InputChips, {
    readOnly: true,
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=ReadOnly.js.map