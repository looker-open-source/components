
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Button, Space } from '../..';
export default function IconPlaceholder() {
  return React.createElement(Space, null, React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.DateRange, null)
    }, "Calendar"), React.createElement(MenuItem, null, "No icon"), React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.PivotTableChart, null)
    }, "Pivot"))
  }, React.createElement(Button, null, "No Icon Gutter")), React.createElement(Menu, {
    iconGutter: true,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.DateRange, null)
    }, "Calendar"), React.createElement(MenuItem, null, "No icon"), React.createElement(MenuItem, {
      icon: React.createElement(MaterialIcons.PivotTableChart, null)
    }, "Pivot"))
  }, React.createElement(Button, null, "Icon Gutter")));
}
//# sourceMappingURL=IconPlaceholder.js.map