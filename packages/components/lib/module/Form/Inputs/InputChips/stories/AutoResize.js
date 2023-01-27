

import React, { useState } from 'react';
import { InputChips } from '..';
export default function AutoResize() {
  const [values, setValues] = useState([]);
  return React.createElement(InputChips, {
    autoResize: true,
    values: values,
    onChange: setValues,
    placeholder: "shrink to fit content"
  });
}
//# sourceMappingURL=AutoResize.js.map