/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import React, { FC, useContext } from 'react'
import { Placement } from '@popperjs/core'
import { DialogContext } from '../Dialog'
import { ListItem, ListItemProps } from '../List'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { useID } from '../utils'
import { useNestedMenu, UseNestedMenuProps } from './useNestedMenu'

export interface MenuItemProps
  extends ListItemProps,
    Pick<UseNestedMenuProps, 'nestedMenu'> {
  compact?: boolean
  tooltip?: string
  tooltipPlacement?: Placement
}

const MenuItemInternal: FC<MenuItemProps> = ({
  children,
  className,
  compact: propCompact,
  current,
  description,
  detail,
  disabled,
  href,
  icon,
  iconArtwork,
  itemRole,
  onBlur,
  onClick,
  onKeyDown,
  onKeyUp,
  onMouseEnter,
  onMouseLeave,
  nestedMenu,
  target,
  tooltip,
  tooltipPlacement = 'left',
  ...props
}) => {
  // TODO: Replace compact with density
  const compact = false

  const id = useID(props.id)

  const {
    popover,
    domProps: { onClick: nestedMenuOnClick, ...nestedMenuProps },
  } = useNestedMenu({
    compact,
    id,
    nestedMenu,
    onClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
  })

  if (detail && nestedMenu) {
    // eslint-disable-next-line no-console
    console.warn('The detail prop is not supported when nestedMenu is used.')
  }
  detail = nestedMenu ? (
    <Icon color="text1" name="ArrowRight" size={compact ? 'small' : 'medium'} />
  ) : (
    detail
  )

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
        role="menuitem"
        {...props}
        {...nestedMenuProps}
      >
        {tooltip ? (
          <Tooltip placement={tooltipPlacement} content={tooltip}>
            <div>{children}</div>
          </Tooltip>
        ) : (
          children
        )}
      </ListItem>
      {/* Keep nestedMenu popover outside of MenuItemLayout to prevent its events
       from bubbling up to the MenuItem (especially onClick)
       due to React Portal event bubbling */}
      {popover}
    </>
  )
}

export const MenuItem = styled(MenuItemInternal)``
