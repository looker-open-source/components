

import React from 'react';
import { TreeItem, Tree, TreeCollection } from '..';
import { Button } from '../../Button';
export default function Accessory() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    label: React.createElement("strong", null, "Orders"),
    detail: {
      content: React.createElement(Button, {
        ml: "large",
        onClick: () => alert('Accessory Button')
      }, "Accessory Button"),
      options: {
        accessory: true
      }
    }
  }, React.createElement(Tree, {
    label: React.createElement("strong", null, "Orders"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "ID"), React.createElement(TreeItem, null, "Status"), React.createElement(Tree, {
    label: React.createElement("strong", null, "Created"),
    defaultOpen: true
  }, React.createElement(TreeItem, null, "Created Date"), React.createElement(TreeItem, null, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter")))));
}
//# sourceMappingURL=Accessory.js.map