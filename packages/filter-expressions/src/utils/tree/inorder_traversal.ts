/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode } from '../../types';

type NodeHandler = (node: FilterASTNode, parent?: FilterASTNode) => void;

/**
 * Traverses the tree depth-first inorder (left, root, right) and assigns an id atribute to each node
 */
export const inorderTraversal = (
  root: FilterASTNode,
  nodeHandler: NodeHandler
) => {
  const inorder = (node?: FilterASTNode, parent?: FilterASTNode) => {
    if (node) {
      inorder(node.left, node);
      nodeHandler(node, parent);
      inorder(node.right, node);
    }
  };
  inorder(root, undefined);
};
