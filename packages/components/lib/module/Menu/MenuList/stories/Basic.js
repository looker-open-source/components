
import React from 'react';
import { MenuItem, MenuList } from '../../..';
export default function Basic(props) {
  return React.createElement(MenuList, props, React.createElement(MenuItem, {
    onClick: () => alert('Hello world!')
  }, "Gouda"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuItem, null, "Swiss"));
}
//# sourceMappingURL=Basic.js.map