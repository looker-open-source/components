

import React from 'react';
import { Button } from '../../Button';
import { SpaceVertical } from '../../Layout';
import { useToggle } from '../../utils';
import { Tree, TreeItem, WindowedTreeCollection } from '..';
export default function WindowingExample() {
  const {
    value,
    toggle
  } = useToggle();
  const trees = React.useMemo(() => Array.from(Array(200), (_, treeIndex) => ({
    content: React.createElement(Tree, {
      label: `Tree ${treeIndex}`
    }),
    isOpen: value,
    items: Array.from(Array(10), (_, itemIndex) => {
      if (itemIndex === 2) {
        return {
          content: React.createElement(Tree, {
            label: `Nested Tree ${treeIndex}-${itemIndex}`
          }),
          isOpen: value,
          items: Array.from(Array(4), (_, nestedItemIdex) => ({
            content: React.createElement(TreeItem, null, "Nested TreeItem ", treeIndex, "-", itemIndex, "-", nestedItemIdex)
          }))
        };
      }
      return {
        content: React.createElement(TreeItem, null, "TreeItem ", treeIndex, "-", itemIndex)
      };
    })
  })), [value]);
  return React.createElement(SpaceVertical, null, React.createElement(Button, {
    onClick: toggle
  }, "Toggle all ", value ? 'closed' : 'open'), React.createElement(WindowedTreeCollection, {
    height: 300,
    width: 500,
    trees: trees
  }));
}
//# sourceMappingURL=WindowingExample.js.map