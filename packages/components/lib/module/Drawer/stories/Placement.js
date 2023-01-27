
import React, { useState } from 'react';
import { Drawer, ButtonOutline, Space, FieldRadioGroup } from '../..';
export default function Placement() {
  const options = [{
    label: 'Left',
    value: 'left'
  }, {
    detail: 'default',
    label: 'Right',
    value: 'right'
  }];
  const [placement, setPlacement] = useState('right');
  return React.createElement(Space, null, React.createElement(Drawer, {
    placement: placement,
    content: "Drawer content"
  }, React.createElement(ButtonOutline, null, "Open Drawer")), React.createElement(FieldRadioGroup, {
    label: "Placement",
    inputsInline: true,
    options: options,
    value: placement,
    onChange: drawerPlacement => setPlacement(drawerPlacement)
  }));
}
//# sourceMappingURL=Placement.js.map