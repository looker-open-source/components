/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode } from '../../../types';
/**
 * Traverses the AST and assigns an id attribute to each node
 */
declare const applyId: (root: FilterASTNode) => FilterASTNode;
export default applyId;
