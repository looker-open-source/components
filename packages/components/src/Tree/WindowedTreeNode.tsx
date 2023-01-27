/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
