
import React from 'react';
import { Menu, MenuItem, Button } from '../..';
export default function Nested() {
  return React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      nestedMenu: React.createElement(React.Fragment, null, React.createElement(MenuItem, null, "Camembert"), React.createElement(MenuItem, null, "Comt\xE9"))
    }, "French"), React.createElement(MenuItem, {
      nestedMenu: React.createElement(React.Fragment, null, React.createElement(MenuItem, null, "Gouda"), React.createElement(MenuItem, null, "Limburger"))
    }, "Dutch"))
  }, React.createElement(Button, null, "Cheese"));
}
//# sourceMappingURL=Nested.js.map