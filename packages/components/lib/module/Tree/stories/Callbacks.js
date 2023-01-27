

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { TreeItem, Tree } from '..';
export default function Callbacks() {
  return React.createElement(Tree, {
    onOpen: () => alert('Open!'),
    onClose: () => alert('Close!'),
    label: "Cheese",
    icon: React.createElement(MaterialIcons.TableChart, null)
  }, React.createElement(TreeItem, null, "Gouda"));
}
//# sourceMappingURL=Callbacks.js.map