
import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { List } from '../';
import { ListItem, ButtonItem, ButtonToggle } from '../../';
export default function Color() {
  const [colorVal, setColorVal] = useState('calculation');
  return React.createElement(React.Fragment, null, React.createElement(ButtonToggle, {
    value: colorVal,
    onChange: draftValue => setColorVal(draftValue)
  }, React.createElement(ButtonItem, null, "calculation"), React.createElement(ButtonItem, null, "dimension"), React.createElement(ButtonItem, null, "key"), React.createElement(ButtonItem, null, "measure")), React.createElement(List, {
    color: colorVal
  }, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.SportsSoccer, null),
    description: "Orange-y",
    detail: "England"
  }, "Cheddar"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.DirectionsBoat, null),
    detail: "Netherlands"
  }, "Gouda"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.LocalPizza, null),
    detail: "Italy"
  }, "Mozzarella"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.BubbleChart, null),
    detail: "Switzerland"
  }, "Swiss")));
}
//# sourceMappingURL=Color.js.map