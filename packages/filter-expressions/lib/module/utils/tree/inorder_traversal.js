

export const inorderTraversal = (root, nodeHandler) => {
  const inorder = (node, parent) => {
    if (node) {
      inorder(node.left, node);
      nodeHandler(node, parent);
      inorder(node.right, node);
    }
  };
  inorder(root, null);
};
//# sourceMappingURL=inorder_traversal.js.map