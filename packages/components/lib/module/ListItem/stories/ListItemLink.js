
import React from 'react';
import { ListItem } from '..';
export default function Link() {
  return React.createElement(ListItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "ListItem that links to Google");
}
//# sourceMappingURL=ListItemLink.js.map