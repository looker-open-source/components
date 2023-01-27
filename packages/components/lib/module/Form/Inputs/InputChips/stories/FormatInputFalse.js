

import React, { useState } from 'react';
import { InputChips } from '..';
import { Space } from '../../../..';
export default function FormatInputFalse() {
  const [values, setValues] = useState([' initial  ', '  values']);
  return React.createElement(Space, null, React.createElement(InputChips, {
    values: values,
    onChange: setValues,
    formatInputValue: false,
    width: 400
  }), React.createElement("pre", {
    "data-testid": "pre"
  }, JSON.stringify(values)));
}
//# sourceMappingURL=FormatInputFalse.js.map