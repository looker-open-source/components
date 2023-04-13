/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../types'

// TODO: This can be optimized -- only walk nodes that need to be updated.
/**
 * If a section's been toggled open or closed, its ID and isOpen values
 * are passed in and the tree is updated accordingly.
 * @param trees
 * @param updateNode
 */
export const openOrCloseNodes = (
  trees: TreeModel[],
  updateNode: { id: string; isOpen: boolean }
): TreeModel[] =>
  trees.map(tree =>
    tree.children
      ? {
          ...tree,
          isOpen: tree.id === updateNode.id ? updateNode.isOpen : tree.isOpen,
          children: openOrCloseNodes(tree.children, updateNode),
        }
      : tree
  )
