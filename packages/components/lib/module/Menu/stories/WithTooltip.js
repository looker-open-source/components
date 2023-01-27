
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Button, Tooltip } from '../..';
export default function WithTooltip() {
  return React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Favorite, null)
    }, "Gouda"), React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Favorite, null)
    }, "Swiss"))
  }, React.createElement(Tooltip, {
    placement: "top",
    content: "Select your favorite kind"
  }, React.createElement(Button, null, "Cheese")));
}
//# sourceMappingURL=WithTooltip.js.map