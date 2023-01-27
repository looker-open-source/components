
import React from 'react';
import { Menu, MenuItem, Button, MenuHeading, MenuDivider } from '../..';
export default function HeadingDivider() {
  return React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuHeading, null, "Good Cheeses"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuItem, null, "Swiss"), React.createElement(MenuItem, null, "Brie"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Great Cheeses"), React.createElement(MenuItem, null, "Pepper Jack"), React.createElement(MenuItem, null, "String Cheese"))
  }, React.createElement(Button, null, "Menu with headings and dividers"));
}
//# sourceMappingURL=HeadingDivider.js.map