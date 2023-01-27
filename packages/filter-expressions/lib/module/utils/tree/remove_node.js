
import cloneDeep from 'lodash/cloneDeep';
export const removeNode = (root, nodeId) => {
  const workingRoot = cloneDeep(root);
  if (workingRoot.id === nodeId) {
    return undefined;
  }
  if (workingRoot.left && workingRoot.left.id === nodeId) {
    return workingRoot.right;
  }
  if (workingRoot.right && workingRoot.right.id === nodeId) {
    return workingRoot.left;
  }
  let parent = workingRoot;
  let pointer = workingRoot.right;
  while (pointer) {
    if (pointer.left && pointer.left.id === nodeId) {
      parent.right = parent.right ? parent.right.right : undefined;
      return workingRoot;
    }
    if (pointer.right && pointer.right.id === nodeId) {
      parent.right = parent.right ? parent.right.left : undefined;
      return workingRoot;
    }
    parent = pointer;
    pointer = pointer.right;
  }
  return workingRoot;
};
//# sourceMappingURL=remove_node.js.map