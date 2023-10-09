import React, { useState } from 'react';
import { ButtonToggle } from '../../..';
export default function Options() {
  const options = [{
    label: 'Smoked Gouda',
    value: 'Gouda'
  }, {
    value: 'Cheddar'
  }, {
    disabled: true,
    value: 'Swiss'
  }];
  const [value, setValue] = useState(options[0].value);
  return React.createElement(ButtonToggle, {
    options: options,
    value: value,
    onChange: setValue
  });
}
//# sourceMappingURL=Options.js.map