

import React from 'react';
import { useToggle } from '../../../../utils/useToggle';
import { ToggleSwitch } from '../..';
export default function Checked() {
  const {
    value,
    toggle
  } = useToggle(true);
  return React.createElement(ToggleSwitch, {
    onChange: toggle,
    on: value
  });
}
//# sourceMappingURL=Checked.js.map