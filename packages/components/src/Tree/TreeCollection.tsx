/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
