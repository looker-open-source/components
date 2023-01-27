

import React, { useState } from 'react';
import { InputChips } from '../';
export default function Disable() {
  const [values, setValues] = useState(['cheddar', 'gouda']);
  return React.createElement(InputChips, {
    disabled: true,
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=Disable.js.map