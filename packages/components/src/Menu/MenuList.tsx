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

import { Placement } from '@popperjs/core'
import omit from 'lodash/omit'
import React, { Ref, useRef, forwardRef, useContext, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
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
import {
  CompatibleHTMLProps,
  reset,
  omitStyledProps,
} from '@looker/design-tokens'
import { usePopover } from '../Popover'
import { MenuContext, MenuItemContext } from './MenuContext'
import { MenuGroup } from './MenuGroup'
import { moveFocus } from './moveFocus'

export interface MenuListProps
  extends CompatibleHTMLProps<HTMLUListElement>,
    MaxHeightProps,
    MinHeightProps,
    HeightProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps {
  compact?: boolean

  /**
   * Display a horizonal rule between each MenuGroup item
   * @default true
   */
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
    { children, compact, disabled, pin, placement, ...props }: MenuListProps,
    ref: Ref<HTMLUListElement>
  ) => {
    const { id, isOpen, setOpen, triggerElement } = useContext(MenuContext)

    /*
     * track inner focus state to prevent components from clobbering each
     * other's keyboard listeners when there are multiple Menus on the page
     */
    const [menuHasFocus, setMenuHasFocus] = useState(false)

    const [renderIconPlaceholder, setRenderIconPlaceholder] = useState(false)

    const wrapperRef = useRef<null | HTMLDivElement>(null)
    const focusId = useRef<any>()

    const context = {
      compact,
      renderIconPlaceholder,
      setRenderIconPlaceholder,
    }

    function handleArrow(e: KeyboardEvent, direction: number, initial: number) {
      if (
        wrapperRef.current &&
        wrapperRef.current.contains(document.activeElement)
      ) {
        moveFocus(direction, initial, wrapperRef)
      }
    }

    useHotkeys('down', () => handleArrow(e, 1, 0))
    useHotkeys('up', () => handleArrow(e, -1, -1))

    const menuList = (
      <MenuItemContext.Provider value={context}>
        <div ref={wrapperRef} onFocus={handleFocus} onBlur={handleBlur}>
          <ul
            ref={ref}
            tabIndex={-1}
            role="menu"
            id={id}
            aria-labelledby={id && `button-${id}`}
            {...omitStyledProps(omit(props, 'groupDividers'))}
          >
            {children}
          </ul>
        </div>
      </MenuItemContext.Provider>
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

const dividersStyle = ({ groupDividers = true }: MenuListProps) =>
  groupDividers &&
  css`
  ${MenuGroup} ~ ${MenuGroup} {
    border-top: 1px solid ${({ theme: { colors } }) => colors.ui2};
  }
`

export const MenuList = styled(MenuListInternal)`
  ${reset}

  ${height}
  ${minHeight}
  ${maxHeight}
  ${minWidth}
  ${maxWidth}
  ${width}

  border-radius: inherit;
  list-style: none;
  outline: none;
  overflow: auto;
  user-select: none;
  ${dividersStyle}
`

MenuList.defaultProps = { minWidth: '12rem' }
