import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function ToggleDynamic() {
  const [isToggled, setIsToggled] = useState(false);
  return React.createElement(IconButton, {
    label: "Add",
    icon: isToggled ? React.createElement(MaterialIcons.AddCircle, null) : React.createElement(MaterialIcons.AddBox, null),
    toggle: isToggled,
    onClick: () => setIsToggled(!isToggled)
  });
}
//# sourceMappingURL=ToggleDynamic.js.map