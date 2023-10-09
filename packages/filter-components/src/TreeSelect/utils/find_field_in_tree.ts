/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../types';

/**
 * Find the tree node for a given field name (e.g. 'orders.status')
 */
export const findFieldInTree = (
  trees?: TreeModel[],
  field?: string
): TreeModel | undefined => {
  if (!trees) return undefined;
  if (field === undefined) return undefined;
  let matchingNode: TreeModel | undefined;
  trees.some(tree => {
    if (tree.children) {
      matchingNode = findFieldInTree(tree.children, field);
    } else {
      if (tree.payload?.field) {
        if (tree.payload.field === field) {
          matchingNode = tree;
        }
      } else if (tree.value === field) {
        matchingNode = tree;
      }
    }
    return !!matchingNode;
  });
  return matchingNode;
};
