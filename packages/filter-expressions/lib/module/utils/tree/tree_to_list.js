

import { inorderTraversal } from './inorder_traversal';

export const treeToList = root => {
  const orItems = [];
  const andItems = [];
  inorderTraversal(root, node => {
    const item = node;
    if (item.type !== ',') {
      ;
      (item.is ? orItems : andItems).push(item);
    }
  });
  return [...orItems, ...andItems];
};
//# sourceMappingURL=tree_to_list.js.map