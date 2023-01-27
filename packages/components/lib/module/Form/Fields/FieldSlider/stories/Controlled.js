

import React, { useState } from 'react';
import { FieldSlider } from '../../FieldSlider';
const handleEvent = cb => {
  return event => {
    const target = event.target;
    cb(parseInt(target.value, 10));
  };
};
export default function Controlled() {
  const [value, setValue] = useState(8);
  const onChange = handleEvent(setValue);
  return React.createElement(FieldSlider, {
    label: "Controlled",
    description: "Min: 0, Max: 11",
    min: 0,
    max: 11,
    value: value,
    onChange: onChange
  });
}
//# sourceMappingURL=Controlled.js.map