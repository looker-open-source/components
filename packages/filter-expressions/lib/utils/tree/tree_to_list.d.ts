/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode, FilterModel } from '../../types';
/**
 * Convert a FilterAST to a list of FilterASTNodes using in order traversal (left, node, right)
 *    (root(1))      ->  [0,1,2,3,4]
 *    /      \
 * left(0)   right(3)
 *           /     \
 *      left(2)     right(4)
 */
export declare const treeToList: (root: FilterASTNode) => FilterModel[];
