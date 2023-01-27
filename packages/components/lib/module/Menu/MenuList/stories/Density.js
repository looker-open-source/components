
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { MenuItem, MenuList, Space, MenuHeading } from '../../..';
export default function Density() {
  return React.createElement(Space, null, React.createElement(MenuList, {
    density: 1
  }, React.createElement(MenuHeading, null, "Biggest MenuList"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), React.createElement(MenuList, {
    density: 0
  }, React.createElement(MenuHeading, null, "Smaller MenuList"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), React.createElement(MenuList, {
    density: -1
  }, React.createElement(MenuHeading, null, "Smaller MenuList"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), React.createElement(MenuList, {
    density: -2
  }, React.createElement(MenuHeading, null, "Smaller MenuList"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), React.createElement(MenuList, {
    density: -3
  }, React.createElement(MenuHeading, null, "Smallest MenuList"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), React.createElement(MenuItem, {
    icon: React.createElement(MaterialIcons.Favorite, null)
  }, "Swiss")));
}
//# sourceMappingURL=Density.js.map