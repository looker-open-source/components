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

import styled from 'styled-components'
import React, { forwardRef, Ref, useContext } from 'react'
import { size } from '@looker/design-tokens'
import { ArrowRight } from '@styled-icons/material'
import { DialogContext } from '../Dialog'
import { ListItem, ListItemProps } from '../List'
import { useForkedRef, useID } from '../utils'
import { ListItemContext } from '../List/ListItemContext'
import { listItemDimensions } from '../List/utils'
import { useNestedMenu, UseNestedMenuProps } from './useNestedMenu'

export interface MenuItemProps
  extends ListItemProps,
    Pick<UseNestedMenuProps, 'nestedMenu'> {}

const MenuItemInternal = forwardRef(
  (
    {
      children,
      detail,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      nestedMenu,
      ...props
    }: MenuItemProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => {
    const id = useID(props.id)

    const {
      popover,
      domProps: {
        onClick: nestedMenuOnClick,
        ref: nestedMenuRef,
        ...nestedMenuProps
      },
    } = useNestedMenu({
      id,
      nestedMenu,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
    })

    const ref = useForkedRef<HTMLLIElement>(nestedMenuRef, forwardedRef)

    const { density } = useContext(ListItemContext)
    const { iconSize } = listItemDimensions(density)

    if (detail && nestedMenu) {
      // eslint-disable-next-line no-console
      console.warn('The detail prop is not supported when nestedMenu is used.')
    }
    detail = nestedMenu ? <NestedMenuIndicator size={iconSize} /> : detail

    const { closeModal } = useContext(DialogContext)

    const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
      // nestedMenuOnClick wraps onClick from props
      nestedMenuOnClick(event)
      // Close the Menu unless event has preventDefault
      if (closeModal && !event.defaultPrevented) {
        closeModal()
      }
    }

    return (
      <>
        <ListItem
          detail={detail}
          onClick={handleOnClick}
          ref={ref}
          role="menuitem"
          {...props}
          {...nestedMenuProps}
        >
          {children}
        </ListItem>
        {/* Keep nestedMenu popover outside of ListItem to prevent its events
       from bubbling up (especially onClick) due to React Portal event bubbling */}
        {popover}
      </>
    )
  }
)

MenuItemInternal.displayName = 'MenuItemInternal'

export const MenuItem = styled(MenuItemInternal)``

const NestedMenuIndicator = styled(ArrowRight)`
  color: ${({ theme }) => theme.colors.text1};
  ${size}
`
