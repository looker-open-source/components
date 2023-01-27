

import applyId from '../transform/utils/apply_id_to_ast';

export const addNode = (root, newNode) => {
  const workingRoot = root;
  if (!workingRoot.right) {
    const newRoot = {
      type: ',',
      left: workingRoot,
      right: newNode
    };
    return applyId(newRoot);
  }
  let parent = workingRoot;
  let pointer = workingRoot;
  while (pointer.right) {
    parent = pointer;
    pointer = pointer.right;
  }
  parent.right = {
    type: ',',
    left: pointer,
    right: newNode
  };
  return applyId(workingRoot);
};
//# sourceMappingURL=add_node.js.map