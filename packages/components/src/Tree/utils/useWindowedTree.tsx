/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { Ref, useCallback, useEffect, useReducer } from 'react'
import { listItemDimensions } from '../../List'
import { DensityProps } from '../../List/types'
import { useWindow } from '../../utils'
import { WindowedTreeNodeProps, WindowedTreeNodeIDProps } from '../types'
import { WindowedTreeNode } from '../WindowedTreeNode'
import { windowedTreeReducer } from './windowedTreeReducer'
import { getWindowedTreeNodeFilterer } from './getWindowedTreeNodeFilterer'

export type UseWindowedTreeNodeProps = DensityProps & {
  ref?: Ref<HTMLUListElement>
  trees: WindowedTreeNodeProps[]
}

export const useWindowedTree = ({
  density,
  trees,
}: UseWindowedTreeNodeProps) => {
  // Keep track of the sub-trees opened / closed state by ID and
  // the total number of SHOWN items(i.e.no ancestor is closed)
  const [{ map, shownIDs, treesWithIDs }, dispatch] = useReducer(
    windowedTreeReducer,
    {
      map: {},
      shownIDs: [],
      treesWithIDs: [],
    }
  )

  useEffect(() => {
    // If the trees prop has changed, need to reset all state
    dispatch({ payload: trees, type: 'RESET' })
  }, [trees])

  const toggleNode = useCallback((id: number, isOpen: boolean) => {
    if (isOpen) {
      dispatch({ payload: id, type: 'OPEN' })
    } else {
      dispatch({ payload: id, type: 'CLOSE' })
    }
  }, [])

  // Get item height from density
  const { height } = listItemDimensions(density || 0)

  // Get the windowing properties
  const { after, before, end, ref, start } = useWindow({
    enabled: shownIDs.length > 100,
    itemCount: shownIDs.length,
    itemHeight: height,
  })

  let content = null

  if (treesWithIDs) {
    // Find the tree nodes that are within the window
    const firstID = shownIDs[start]
    const lastID = shownIDs[end]
    const nodesInWindow: WindowedTreeNodeIDProps[] = []
    treesWithIDs.every(
      getWindowedTreeNodeFilterer(nodesInWindow, firstID, lastID)
    )

    content = (
      <>
        {before}
        {nodesInWindow.map((tree) => (
          <WindowedTreeNode {...tree} firstID={firstID} key={tree.id} />
        ))}
        {after}
      </>
    )
  }

  return {
    content,
    ref,
    shownIDs,
    value: { density, toggleNode, toggleStateMap: map },
  }
}
