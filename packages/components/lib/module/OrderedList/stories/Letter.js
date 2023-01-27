
import React from 'react';
import { OrderedList } from '../OrderedList';
export default function Letter() {
  return React.createElement(OrderedList, {
    type: 'letter'
  }, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack"));
}
//# sourceMappingURL=Letter.js.map