

import React from 'react';
import { FieldSlider } from '../../FieldSlider';
export default function Disabled() {
  return React.createElement(FieldSlider, {
    disabled: true,
    label: "Disabled",
    max: 5,
    min: 0
  });
}
//# sourceMappingURL=Disabled.js.map