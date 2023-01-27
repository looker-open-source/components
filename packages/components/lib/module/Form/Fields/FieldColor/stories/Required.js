

import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
export default function Required() {
  const [value, setValue] = useState('purple');
  const handleChange = e => setValue(e.currentTarget.value);
  return React.createElement(FieldColor, {
    label: "required",
    value: value,
    onChange: handleChange,
    required: true
  });
}
//# sourceMappingURL=Required.js.map