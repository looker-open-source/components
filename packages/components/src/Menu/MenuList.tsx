/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { Placement } from 'popper.js'
import React, { Ref, useRef, forwardRef, useContext } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { css } from 'styled-components'
import {
  MaxHeightProps,
  MinHeightProps,
  HeightProps,
  height,
  minHeight,
  maxHeight,
  width,
  WidthProps,
  MaxWidthProps,
  MinWidthProps,
  minWidth,
  maxWidth,
} from 'styled-system'
import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import { usePopover } from '../Popover'
import { MenuContext, MenuItemStyleContext } from './MenuContext'
import { MenuGroup } from './MenuGroup'
import { MenuSharedProps } from './MenuItem'
import { moveFocus } from './moveFocus'

export interface MenuListProps
  extends CompatibleHTMLProps<HTMLUListElement>,
    MaxHeightProps,
    MinHeightProps,
    HeightProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps,
    MenuSharedProps {
  compact?: boolean
  groupDividers?: boolean

  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popper.js. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement

  /**
   * By default MenuList will reposition itself if they overflow the widow.
   * You can use the pin property to override this behavior.
   */
  pin?: boolean

  /**
   * Allow the overlay to break out of the scroll parent
   */
  escapeWithReference?: boolean
}

export const MenuListInternal = forwardRef(
  (
    {
      children,
      compact,
      customizationProps,
      disabled,
      pin,
      placement,
      ...props
    }: MenuListProps,
    ref: Ref<HTMLUListElement>
  ) => {
    const { isOpen, setOpen, triggerElement } = useContext(MenuContext)

    const innerRef = useRef<null | HTMLElement>(null)

    const menuList = (
      <MenuItemStyleContext.Provider value={{ compact, customizationProps }}>
        <HotKeys
          innerRef={innerRef}
          keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
          handlers={{
            MOVE_DOWN: () => moveFocus(1, 0, innerRef),
            MOVE_UP: () => moveFocus(-1, -1, innerRef),
          }}
          style={{ borderRadius: 'inherit' }}
        >
          <ul ref={ref} tabIndex={-1} role="menu" {...props}>
            {children}
          </ul>
        </HotKeys>
      </MenuItemStyleContext.Provider>
    )

    const isMenu = isOpen !== undefined
    const { popover } = usePopover({
      content: menuList,
      isOpen,
      pin,
      placement,
      setOpen,
      triggerElement,
    })

    if (disabled) return null

    if (isMenu) return popover || null

    return menuList
  }
)

const dividersStyle = css`
  ${MenuGroup} ~ ${MenuGroup} { /* stylelint-disable-line */
    border-top: 1px solid ${props => props.theme.colors.palette.charcoal200};
  }
`

export const MenuList = styled(MenuListInternal)`
  ${reset}

  ${minHeight}
  ${maxHeight}
  ${height}

  min-width: 12rem;
  ${minWidth}
  ${maxWidth}
  ${width}

  overflow: auto;
  border-radius: inherit;

  list-style: none;
  outline: none;
  user-select: none;
  ${props => props.groupDividers !== false && dividersStyle};
`
