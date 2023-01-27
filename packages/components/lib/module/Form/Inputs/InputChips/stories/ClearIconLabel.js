

import React, { useState } from 'react';
import { InputChips } from '../';
export default function ClearIconLabel() {
  const [values, setValues] = useState(['cheddar', 'gouda']);
  return React.createElement(InputChips, {
    clearIconLabel: "remove all chips",
    chipIconLabel: "remove this chip",
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=ClearIconLabel.js.map