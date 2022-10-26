import React from 'react';
import { TreeCollection, Tree, TreeItem } from '..';
import { Button } from '../../Button';
export const HoverDisclosure = () => React.createElement(TreeCollection, null, React.createElement(Tree, {
  label: "Cheeses",
  detail: {
    content: React.createElement(Button, null, "Button"),
    options: {
      accessory: true,
      hoverDisclosure: true
    }
  }
}, React.createElement(TreeItem, null, "Cheddar")));
HoverDisclosure.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=HoverDisclosure.js.map