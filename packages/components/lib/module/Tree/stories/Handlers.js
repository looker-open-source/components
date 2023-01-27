

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { TreeCollection, TreeItem, Tree } from '..';
import { Text } from '../../Text';
export default function Handlers() {
  return React.createElement(TreeCollection, null, React.createElement(Tree, {
    label: "Cheeses",
    defaultOpen: true
  }, React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.TableChart, null),
    detail: React.createElement(Text, {
      color: "text2"
    }, "is great"),
    onClick: () => alert('Clicked Swiss'),
    selected: true
  }, "Swiss")));
}
//# sourceMappingURL=Handlers.js.map