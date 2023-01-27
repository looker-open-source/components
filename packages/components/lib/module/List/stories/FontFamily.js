
import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { ButtonItem, ButtonToggle, ListItem } from '../../';
import { List } from '../';
export default function FontFamily() {
  const [family, setFamily] = useState('code');
  return React.createElement(React.Fragment, null, React.createElement(ButtonToggle, {
    value: family,
    onChange: val => setFamily(val)
  }, React.createElement(ButtonItem, null, "body"), React.createElement(ButtonItem, null, "brand"), React.createElement(ButtonItem, null, "code")), React.createElement(List, {
    fontFamily: family
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
//# sourceMappingURL=FontFamily.js.map