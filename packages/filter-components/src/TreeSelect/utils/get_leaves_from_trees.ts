/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../types'

export const getLeavesFromTrees = (trees: TreeModel[]): any[] => {
  let fields: any[] = []
  trees.forEach(tree => {
    if (tree.children) {
      fields = [...fields, ...getLeavesFromTrees(tree.children)]
    } else if (tree.payload) {
      fields = [...fields, { ...tree.payload, label: tree.value }]
    }
  })
  return fields
}
