"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inorderTraversal = void 0;

var inorderTraversal = function inorderTraversal(root, nodeHandler) {
  var inorder = function inorder(node, parent) {
    if (node) {
      inorder(node.left, node);
      nodeHandler(node, parent);
      inorder(node.right, node);
    }
  };
  inorder(root, null);
};
exports.inorderTraversal = inorderTraversal;
//# sourceMappingURL=inorder_traversal.js.map