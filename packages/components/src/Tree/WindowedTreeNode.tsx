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

import type { DensityProp } from '@looker/design-tokens'
import React, {
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
} from 'react'
import { TreeCollectionContext } from './TreeCollectionContext'
import type { WindowedTreeNodeIDProps } from './types'

export type WindowedTreeContextProps = DensityProp & {
  isOpen?: boolean
  partialRender: boolean
  toggleNode?: (isOpen: boolean) => void
}

export const WindowedTreeContext = createContext<WindowedTreeContextProps>({
  partialRender: false,
})

export const WindowedTreeNode = ({
  content,
  firstIDinWindow,
  id,
  items,
}: WindowedTreeNodeIDProps & {
  firstIDinWindow?: number
}) => {
  // Update state for which tree nodes are opened / closed
  const context = useContext(TreeCollectionContext)
  const toggleNode = useCallback(
    (isOpen: boolean) => {
      context.toggleNode?.(id, isOpen)
    },
    [context, id]
  )

  if (items && isValidElement(content)) {
    // insert the items as children
    const props = {
      children: items.map(item => (
        <WindowedTreeNode
          firstIDinWindow={firstIDinWindow}
          {...item}
          key={item.id}
        />
      )),
    }
    const isOpen = context.toggleStateMap?.[id]?.isOpen

    return (
      <WindowedTreeContext.Provider
        value={{
          density: context.density,
          isOpen,
          partialRender: firstIDinWindow ? id < firstIDinWindow : false,
          toggleNode,
        }}
      >
        {cloneElement(content, props)}
      </WindowedTreeContext.Provider>
    )
  }
  return content
}
