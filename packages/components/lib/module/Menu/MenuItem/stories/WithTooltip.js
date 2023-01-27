
import React from 'react';
import { MenuList, Tooltip, MenuItem } from '../../..';
export default function WithTooltip() {
  return React.createElement(MenuList, null, React.createElement(Tooltip, {
    content: "It is gouda!",
    placement: "left"
  }, React.createElement(MenuItem, null, "Gouda")));
}
//# sourceMappingURL=WithTooltip.js.map