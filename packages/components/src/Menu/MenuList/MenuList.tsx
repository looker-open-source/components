/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { ListProps } from '../../List'
import { List } from '../../List'
import { listPadding } from '../../List/utils'
import type { CloseParentMenuProps } from '../NestedMenuProvider'
import { NestedMenuProvider } from '../NestedMenuProvider'

export type MenuListProps = Omit<ListProps, 'color'> & CloseParentMenuProps

export const MenuListInternal = forwardRef(
  (
    { children, closeParentMenu, ...props }: MenuListProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => (
    <NestedMenuProvider closeParentMenu={closeParentMenu}>
      <List role="menu" ref={forwardedRef} {...props}>
        {children}
      </List>
    </NestedMenuProvider>
  )
)
MenuListInternal.displayName = 'MenuListInternal'

/**
 * @private Should only be used when a more complicated <Popover> + <MenuList>
 * composition is needed over a normal <Menu> element.
 */
export const MenuList = styled(MenuListInternal)`
  min-width: 12rem;

  ${listPadding}
`
