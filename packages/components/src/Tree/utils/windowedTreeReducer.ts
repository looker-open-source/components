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

import type { Reducer } from 'react'
import type {
  ToggleStateMap,
  WindowedTreeNodeProps,
  WindowedTreeNodeIDProps,
} from '../types'

type WindowedTreeState = {
  map: ToggleStateMap
  shownIDs: number[]
  treesWithIDs: WindowedTreeNodeIDProps[]
}
type WindowedTreeAction = {
  type: 'OPEN' | 'CLOSE' | 'RESET'
  payload: number | WindowedTreeNodeProps[]
}

const updateCount = (state: WindowedTreeState, id: number, isOpen: boolean) => {
  // Get the updated count after a tree has been toggled
  const shownIDs: number[] = []
  const map = { ...state.map, [id]: { ...state.map[id], isOpen } }

  const countTree = (tree: WindowedTreeNodeIDProps) => {
    shownIDs.push(tree.id)
    if (tree.items) {
      const treeIsOpen = map[tree.id].isOpen
      if (treeIsOpen) {
        tree.items.forEach(countTree)
      }
    }
  }
  state.treesWithIDs?.forEach(countTree)
  return { ...state, map, shownIDs }
}

export const windowedTreeReducer: Reducer<
  WindowedTreeState,
  WindowedTreeAction
> = (state, action) => {
  switch (action.type) {
    case 'RESET': {
      const trees = action.payload as WindowedTreeNodeProps[]
      // 1. get the initial count,
      // 2. generate toggleStateMap for future count updates
      // 3. add an index-like ID to each tree/item
      const map: ToggleStateMap = {}
      const shownIDs: number[] = []
      // auto-increment-style ID for each item
      let id = 0

      const processTree =
        (parentOpen?: boolean) =>
        (tree: WindowedTreeNodeProps): WindowedTreeNodeIDProps => {
          id++
          if (parentOpen) {
            shownIDs.push(id)
          }
          if (tree.items) {
            map[id] = {
              isOpen: tree.isOpen || false,
              length: tree.items.length,
            }
            return {
              ...tree,
              id,
              items: tree.items.map(
                processTree(parentOpen ? tree.isOpen : false)
              ),
            }
          }
          return { content: tree.content, id }
        }

      const treesWithIDs = trees.map(processTree(true))

      return { map, shownIDs, treesWithIDs }
    }
    case 'OPEN': {
      return updateCount(state, action.payload as number, true)
    }
    case 'CLOSE': {
      return updateCount(state, action.payload as number, false)
    }
  }
}
