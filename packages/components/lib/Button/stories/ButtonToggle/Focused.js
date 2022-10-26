import React, { useState } from 'react';
import { ButtonToggle, ButtonItem } from '../../..';
export default function Focused() {
  const [toggle, setToggle] = useState('');
  return React.createElement(ButtonToggle, {
    value: toggle,
    onChange: setToggle,
    margin: "small"
  }, React.createElement(ButtonItem, null, "Ruby"), React.createElement(ButtonItem, null, "TypeScript"), React.createElement(ButtonItem, null, "Python"));
}
//# sourceMappingURL=Focused.js.map