import React, { useState } from 'react';
import { ButtonToggle, ButtonItem } from '../../..';
export default function Disabled() {
  const [toggle, setToggle] = useState('');
  return React.createElement(ButtonToggle, {
    value: toggle,
    onChange: setToggle,
    disabled: true
  }, React.createElement(ButtonItem, null, "Ruby"), React.createElement(ButtonItem, null, "TypeScript"), React.createElement(ButtonItem, null, "Python"));
}
//# sourceMappingURL=Disabled.js.map