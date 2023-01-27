
import React from 'react';
import { MenuItem } from '../../..';
export default function Link() {
  return React.createElement(MenuItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "MenuItem that links to Google");
}
//# sourceMappingURL=Link.js.map