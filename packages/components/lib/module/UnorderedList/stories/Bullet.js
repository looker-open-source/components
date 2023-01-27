
import React from 'react';
import { UnorderedList } from '..';
export default function Bullet() {
  return React.createElement(UnorderedList, {
    type: 'bullet'
  }, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack"));
}
//# sourceMappingURL=Bullet.js.map