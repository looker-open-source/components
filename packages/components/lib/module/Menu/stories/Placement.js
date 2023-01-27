
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Button } from '../..';
export default function Placement() {
  return React.createElement(Menu, {
    placement: 'left',
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Favorite, null)
    }, "Gouda"), React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Favorite, null)
    }, "Swiss"))
  }, React.createElement(Button, null, "Cheese"));
}
//# sourceMappingURL=Placement.js.map