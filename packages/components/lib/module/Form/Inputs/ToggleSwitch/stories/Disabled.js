

import React from 'react';
import { useToggle } from '../../../../utils/useToggle';
import { ToggleSwitch } from '../..';
export default function Checked() {
  const {
    value,
    toggle
  } = useToggle(false);
  return React.createElement(ToggleSwitch, {
    onChange: toggle,
    on: value,
    disabled: true
  });
}
//# sourceMappingURL=Disabled.js.map