import React, { useState } from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
import { Popover, PopoverContent } from '../../Popover';
import { FieldToggleSwitch } from '../../Form';
import { Space, SpaceVertical } from '../../Layout';
import { Text } from '../../Text';
export default function NestedInPopover() {
  const [prevent, setPrevent] = useState(false);

  function handleChange(e) {
    setPrevent(e.currentTarget.checked);
  }

  const [lastEvent, setLastEvent] = useState('N/A');

  const getHandler = text => e => {
    setLastEvent(text);

    if (prevent) {
      e.preventDefault();
    }
  };

  const handlers = {
    onBlur: getHandler('blur'),
    onClick: getHandler('click'),
    onFocus: getHandler('focus'),
    onMouseOut: getHandler('mouse out'),
    onMouseOver: getHandler('mouse over')
  };
  return React.createElement(SpaceVertical, {
    p: "u5"
  }, React.createElement(Text, null, "Last event: ", lastEvent), React.createElement(Space, null, React.createElement(Popover, {
    content: React.createElement(PopoverContent, null, "Some content")
  }, React.createElement(Tooltip, {
    content: "Some tooltip"
  }, React.createElement(Button, handlers, "Open"))), React.createElement(FieldToggleSwitch, {
    on: prevent,
    onChange: handleChange,
    label: "Prevent default"
  })));
}
//# sourceMappingURL=NestedInPopover.js.map