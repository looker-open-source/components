/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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

export const getWindowedTreeNodeFilterer = (
  filteredList: WindowedTreeNodeIDProps[],
  firstIDinWindow: number,
  lastIDinWindow: number
) => (
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
