import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function ToggleBackground() {
  const [isToggled, setIsToggled] = useState(false);
  return React.createElement(IconButton, {
    label: "Add",
    icon: isToggled ? React.createElement(MaterialIcons.AddCircle, null) : React.createElement(MaterialIcons.AddBox, null),
    toggle: isToggled,
    toggleBackground: isToggled,
    onClick: () => setIsToggled(!isToggled)
  });
}
//# sourceMappingURL=ToggleBackground.js.map