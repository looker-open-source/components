
import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Space, Text, Button } from '../../..';
export default function Controlled() {
  const [isOpen, setOpen] = useState(false);
  return React.createElement(Space, null, React.createElement(Menu, {
    isOpen: isOpen,
    setOpen: setOpen,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.Email, null)
    }, "Email"), React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.TableChart, null)
    }, "Spreadsheet"))
  }, React.createElement(Button, null, "Export")), React.createElement(Text, null, isOpen ? 'Menu Open' : 'Menu Closed'));
}
//# sourceMappingURL=Controlled.js.map