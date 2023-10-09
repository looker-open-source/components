import React, { useState } from 'react';
import { Button, ButtonToggle, Popover } from '../../..';
export default function Options() {
  const [toggle, setToggle] = useState('Gouda');
  return React.createElement(Popover, {
    content: React.createElement(ButtonToggle, {
      margin: "large",
      value: toggle,
      onChange: setToggle,
      options: [{
        label: 'Smoked Gouda',
        value: 'Gouda'
      }, {
        value: 'Cheddar'
      }, {
        value: 'Swiss'
      }]
    })
  }, React.createElement(Button, null, "Open Popover"));
}
//# sourceMappingURL=PopoverFocus.js.map