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

import React, { FC, KeyboardEvent, ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { useArrowKeyNav } from '../utils'
import { getNextTreeFocus, getTreeItems } from './utils'

export type TreeCollectionProps = {
  children?: ReactNode
  className?: string
}

const TreeCollectionLayout: FC<TreeCollectionProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLElement>(null)

  // Additional key shortcuts
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const treeItems = getTreeItems(ref.current as HTMLElement)
    if (event.key === 'Home') {
      const firstItem = treeItems[0]
      firstItem && firstItem.focus()
    } else if (event.key === 'End') {
      const lastItem = treeItems[treeItems.length - 1]
      lastItem && lastItem.focus()
    }
  }

  const navProps = useArrowKeyNav({
    axis: 'both',
    getNextFocus: getNextTreeFocus,
    onKeyDown: handleKeyDown,
    ref,
  })

  return (
    <ul className={className} role="tree" {...navProps}>
      {children}
    </ul>
  )
}

export const TreeCollection = styled(TreeCollectionLayout)`
  margin: 0;
  padding: 0;
`
