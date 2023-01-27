

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { TreeItem, Tree, TreeCollection } from '..';
export default function Nesting() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    defaultOpen: true,
    label: "Orders",
    icon: React.createElement(MaterialIcons.TableChart, null)
  }, React.createElement(Tree, {
    defaultOpen: true,
    label: "Created"
  }, React.createElement(TreeItem, null, "Created Date"), React.createElement(TreeItem, null, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter"))));
}
//# sourceMappingURL=Nesting.js.map