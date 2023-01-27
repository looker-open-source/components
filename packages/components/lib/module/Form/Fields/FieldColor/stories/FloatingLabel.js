

import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
export default function FloatingLabel() {
  const [value, setValue] = useState('purple');
  const handleChange = e => setValue(e.currentTarget.value);
  return React.createElement(FieldColor, {
    label: "Floating label",
    value: value,
    onChange: handleChange,
    externalLabel: false
  });
}
//# sourceMappingURL=FloatingLabel.js.map