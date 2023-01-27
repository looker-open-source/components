

import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
import { Space } from '../../../../Layout';
import { Button } from '../../../../';
export default function Controlled() {
  const [value, setValue] = useState('white');
  const handleChange = e => setValue(e.currentTarget.value);
  return React.createElement(Space, null, React.createElement(Button, {
    onClick: () => setValue('blue'),
    value: "blue"
  }, "Blue"), React.createElement(FieldColor, {
    label: "Controlled",
    value: value,
    onChange: handleChange
  }));
}
//# sourceMappingURL=Controlled.js.map