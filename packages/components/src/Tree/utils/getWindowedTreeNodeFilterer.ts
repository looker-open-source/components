/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { WindowedTreeNodeIDProps } from '../types'

const getTreeWindowIntersection = (
  list: WindowedTreeNodeIDProps[],
  index: number,
  firstIDinWindow: number,
  lastIDinWindow: number
) => {
  const tree = list[index]
  if (tree.id > lastIDinWindow) return 'after'

  const nextTree = list[index + 1]
  if (tree.id < firstIDinWindow) {
    if (nextTree && nextTree.id > firstIDinWindow) {
      return 'intersects'
    }
  } else if (tree.id <= lastIDinWindow) {
    return 'intersects'
  }
  return 'before'
}

export const getWindowedTreeNodeFilterer =
  (
    filteredList: WindowedTreeNodeIDProps[],
    firstIDinWindow: number,
    lastIDinWindow: number
  ) =>
  (
    node: WindowedTreeNodeIDProps,
    index: number,
    list: WindowedTreeNodeIDProps[]
  ) => {
    const intersection = getTreeWindowIntersection(
      list,
      index,
      firstIDinWindow,
      lastIDinWindow
    )
    // If the node is after the window, stop looping
    if (intersection === 'after') return false

    if (intersection === 'intersects') {
      const treeItems = node.items
      if (treeItems) {
        // Recursively filter the tree's items
        const filteredItems: WindowedTreeNodeIDProps[] = []
        treeItems.every(
          getWindowedTreeNodeFilterer(
            filteredItems,
            firstIDinWindow,
            lastIDinWindow
          )
        )
        const treeWithFilteredItems = { ...node, items: filteredItems }
        filteredList.push(treeWithFilteredItems)
      } else {
        // This is an item (not a tree) within the window
        filteredList.push(node)
      }
    }
    // Return true to keep looping for either 'before' or 'intersects'
    // 'before': we need to keep checking to find the first intersecting tree
    // 'intersects': the next tree may also intersect the window
    return true
  }
