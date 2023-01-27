
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Button } from '../..';
export default function Density() {
  return React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Favorite, null)
    }, "Gouda"), React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Favorite, null)
    }, "Swiss")),
    density: -3
  }, React.createElement(Button, null, "Cheese"));
}
//# sourceMappingURL=Density.js.map