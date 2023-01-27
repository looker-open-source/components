

import React, { useState } from 'react';
import { InputChips } from '../';
export default function Placeholder() {
  const [values, setValues] = useState([]);
  return React.createElement(InputChips, {
    placeholder: "Enter more chips here",
    values: values,
    onChange: setValues
  });
}
//# sourceMappingURL=Placeholder.js.map