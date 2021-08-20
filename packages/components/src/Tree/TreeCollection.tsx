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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { KeyboardEvent, Ref } from 'react'
import React, { forwardRef, useRef } from 'react'
import styled from 'styled-components'
import { getNextItemFocus, getItems } from '../List/utils'
import { useArrowKeyNav, useForkedRef } from '../utils'

export type TreeCollectionProps = CompatibleHTMLProps<HTMLUListElement>

const TreeCollectionInternal = forwardRef(
  (props: TreeCollectionProps, forwardedRef: Ref<HTMLUListElement>) => {
    const internalRef = useRef<HTMLUListElement>(null)

    // Additional key shortcuts
    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      const treeItems = getItems(internalRef.current as HTMLElement)
      if (event.key === 'Home') {
        const firstItem = treeItems[0]
        firstItem && firstItem.focus()
      } else if (event.key === 'End') {
        const lastItem = treeItems[treeItems.length - 1]
        lastItem && lastItem.focus()
      }
    }

    const navProps = useArrowKeyNav<HTMLUListElement>({
      axis: 'both',
      getNextFocus: getNextItemFocus,
      onKeyDown: handleKeyDown,
      ref: useForkedRef(internalRef, forwardedRef),
    })

    return <ul role="tree" {...props} {...navProps} />
  }
)

export const TreeCollection = styled(TreeCollectionInternal)`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
