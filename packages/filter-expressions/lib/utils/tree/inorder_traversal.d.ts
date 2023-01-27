/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode } from '../../types';
declare type NodeHandler = (node: FilterASTNode, parent?: FilterASTNode) => any;
/**
 * Traverses the tree depth-first inorder (left, root, right) and assigns an id atribute to each node
 */
export declare const inorderTraversal: (root: FilterASTNode, nodeHandler: NodeHandler) => void;
export {};
