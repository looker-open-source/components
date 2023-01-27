
import React from 'react';
import { List } from '../../';
import { ListItem } from '..';
export default function Role() {
  return React.createElement(List, null, React.createElement(ListItem, {
    itemRole: "button",
    description: "Definitely a button"
  }, "List Item"), React.createElement(ListItem, {
    itemRole: "link",
    description: "Definitely a link"
  }, "List Item"), React.createElement(ListItem, {
    itemRole: "none",
    description: "Definitely a none"
  }, "List Item"));
}
//# sourceMappingURL=ListItemRole.js.map