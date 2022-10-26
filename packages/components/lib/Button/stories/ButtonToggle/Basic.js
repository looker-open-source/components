import React, { useState } from 'react';
import { ButtonToggle, ButtonItem } from '../../..';
export default function Basic() {
  const [toggle, setToggle] = useState('');
  return React.createElement(ButtonToggle, {
    value: toggle,
    onChange: setToggle
  }, React.createElement(ButtonItem, null, "Ruby"), React.createElement(ButtonItem, null, "TypeScript"), React.createElement(ButtonItem, null, "Python"));
}
//# sourceMappingURL=Basic.js.map