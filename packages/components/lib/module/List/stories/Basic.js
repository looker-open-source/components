
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { List } from '../';
import { ListItem } from '../../';
export default function Basic() {
  return React.createElement(List, null, React.createElement(ListItem, {
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
  }, "Swiss"));
}
//# sourceMappingURL=Basic.js.map