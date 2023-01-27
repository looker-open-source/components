

import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
export default function OnChange() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => setChecked(!checked);
  return React.createElement(Checkbox, {
    checked: checked,
    onChange: handleChange
  });
}
//# sourceMappingURL=OnChange.js.map