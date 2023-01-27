
import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { List } from '../';
import { ListItem, ButtonItem, ButtonToggle } from '../../';
export default function Density() {
  const [currentDensity, setCurrentDensity] = useState(0);
  return React.createElement(React.Fragment, null, React.createElement(ButtonToggle, {
    value: String(currentDensity),
    onChange: draftValue => setCurrentDensity(parseInt(draftValue))
  }, React.createElement(ButtonItem, null, "-3"), React.createElement(ButtonItem, null, "-2"), React.createElement(ButtonItem, null, "-1"), React.createElement(ButtonItem, null, "0"), React.createElement(ButtonItem, null, "1")), React.createElement(List, {
    density: currentDensity
  }, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.DateRange, null)
  }, "Item 1"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.DateRange, null)
  }, "Item 2"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.DateRange, null)
  }, "Item 3")));
}
//# sourceMappingURL=Density.js.map