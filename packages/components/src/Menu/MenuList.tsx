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
import React, {
  Children,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  ReactChild,
  Ref,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
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
import { moveFocus, useForkedRef, useWindow } from '../utils'
import { usePopover } from '../Popover'
import { MenuContext, MenuItemContext } from './MenuContext'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'

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
   * Display a horizontal rule between each MenuGroup item
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

  /**
   * Use windowing for long lists (strongly recommended to also define a width)
   * 'none' - default with children are <= 100.
   * 'variable' - default with children > 100 & first child is a MenuGroup
   * 'fixed' - better performance, default when first child is a MenuItem
   */
  windowing?: 'fixed' | 'variable' | 'none'
}

const isMenuGroup = (child: ReactChild) => {
  return isValidElement(child) && child.type === MenuGroup
}
const isMenuItem = (child: ReactChild) => {
  return isValidElement(child) && child.type === MenuItem
}

const getMenuChildHeight = (child: ReactChild, compact?: boolean) => {
  const baseHeight = compact ? 32 : 40
  if (isValidElement(child)) {
    if (child.props.description) {
      return baseHeight + 12
    }
    if (isMenuGroup(child) && child.props.children) {
      // Get height of group items combined
      const subListHeight =
        Children.toArray(child.props.children).length * baseHeight
      // Add group heading, padding and divider
      return subListHeight + 24 + 16 + 1
    }
  }
  return baseHeight
}

export const MenuListInternal = forwardRef(
  (
    {
      children,
      compact,
      disabled,
      pin,
      placement,
      windowing,
      ...props
    }: MenuListProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => {
    const { id, isOpen, setOpen, triggerElement } = useContext(MenuContext)

    const [renderIconPlaceholder, setRenderIconPlaceholder] = useState(false)

    const childArray = useMemo(() => Children.toArray(children), [children])
    if (childArray.length > 100 && windowing === undefined) {
      const firstChild = childArray[0]
      if (isMenuGroup(firstChild as ReactChild)) {
        windowing = 'variable'
      } else if (isMenuItem(firstChild as ReactChild)) {
        windowing = 'fixed'
      } else {
        windowing = 'none'
      }
    }

    // Warning for width prop
    useEffect(() => {
      if (
        process.env.NODE_ENV === 'development' &&
        windowing &&
        windowing !== 'none' &&
        !props.width
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          `Define a width when using windowing to avoid width fluctuations during scrolling.`
        )
      }
    }, [windowing, props.width])

    // childHeight will be a number (fixed windowing)
    // or a function that takes an index and returns a number (variable windowing)
    const childHeight = useMemo(() => {
      if (windowing === 'fixed') {
        return childArray[0]
          ? getMenuChildHeight(childArray[0] as ReactChild, compact)
          : 0
      }
      return (child: ReactChild) => getMenuChildHeight(child, compact)
    }, [windowing, childArray, compact])

    const { content, containerElement, ref } = useWindow({
      childHeight: childHeight,
      children: children as JSX.Element | JSX.Element[],
      enabled: windowing !== 'none',
      spacerTag: 'li',
    })
    const forkedRef = useForkedRef(forwardedRef, ref)

    function handleArrowKey(direction: number, initial: number) {
      moveFocus(direction, initial, containerElement)
    }

    const context = {
      compact,
      handleArrowDown: (e: KeyboardEvent<HTMLLIElement>) => {
        e.preventDefault()
        handleArrowKey(1, 0)
        return false
      },
      handleArrowUp: (e: KeyboardEvent<HTMLLIElement>) => {
        e.preventDefault()
        handleArrowKey(-1, -1)
        return false
      },
      renderIconPlaceholder,
      setRenderIconPlaceholder,
    }

    const menuList = (
      <MenuItemContext.Provider value={context}>
        <ul
          ref={forkedRef}
          tabIndex={-1}
          role="menu"
          id={id}
          aria-labelledby={id && `button-${id}`}
          {...omitStyledProps(omit(props, 'groupDividers'))}
        >
          {content}
        </ul>
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
