

import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
export default function Disabled() {
  const [value, setValue] = useState('purple');
  const handleChange = e => setValue(e.currentTarget.value);
  return React.createElement(FieldColor, {
    label: "disabled",
    value: value,
    onChange: handleChange,
    disabled: true
  });
}
//# sourceMappingURL=Disabled.js.map