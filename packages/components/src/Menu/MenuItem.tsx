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
import pick from 'lodash/pick'
import styled, { ThemeContext } from 'styled-components'
import type { MouseEvent, Ref } from 'react'
import React, { forwardRef, useContext } from 'react'
import { shouldForwardProp, size } from '@looker/design-tokens'
import { ArrowRight } from '@styled-icons/material/ArrowRight'
import { DialogContext } from '../Dialog'
import type { ListItemProps } from '../ListItem'
import { ListItem, ListItemContext, listItemDimensions } from '../ListItem'
import {
  useForkedRef,
  useID,
  mergeClassNames,
  useCallbackRef,
  useMeasuredElement,
} from '../utils'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import { NestedMenuContext } from './NestedMenuProvider'
import type { UseNestedMenuProps } from './useNestedMenu'
import { useNestedMenu } from './useNestedMenu'

export interface MenuItemProps
  extends Omit<ListItemProps, 'color'>,
    Pick<UseNestedMenuProps, 'nestedMenu'> {}

export const MenuItem = styled(
  forwardRef(
    (
      {
        className,
        children,
        detail,
        onClick,
        onKeyDown,
        onMouseEnter,
        onMouseLeave,
        nestedMenu,
        style,
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

      // find the dimensions of button for ripple behavior
      const [element, internalRef] = useCallbackRef(forwardedRef)
      const [{ height, width }] = useMeasuredElement(element)

      const {
        callbacks,
        className: rippleClassName,
        style: rippleStyle,
      } = useRipple({
        bounded: true,
        color: 'neutral',
        height,
        width,
      })

      const rippleHandlers = useRippleHandlers(
        callbacks,
        {
          ...pick({ ...props, ...nestedMenuProps }, rippleHandlerKeys),
        },
        props.disabled
      )
      const ref = useForkedRef<HTMLLIElement>(nestedMenuRef, internalRef)

      const theme = useContext(ThemeContext)
      const { density } = useContext(ListItemContext)
      const { iconSize } = listItemDimensions(density || theme.defaults.density)

      if (detail && nestedMenu) {
        // eslint-disable-next-line no-console
        console.warn(
          'The detail prop is not supported when nestedMenu is used.'
        )
      }
      detail = nestedMenu ? <NestedMenuIndicator size={iconSize} /> : detail

      const { closeModal } = useContext(DialogContext)
      const { closeParentMenu } = useContext(NestedMenuContext)

      const handleOnClick = (event: MouseEvent<HTMLLIElement>) => {
        // nestedMenuOnClick wraps onClick from props
        nestedMenuOnClick(event)
        // Close the Menu unless event has preventDefault
        if (!event.defaultPrevented) {
          closeModal?.()
          closeParentMenu?.()
        }
      }

      return (
        <>
          <ListItem
            className={mergeClassNames([className, rippleClassName])}
            detail={detail}
            onClick={handleOnClick}
            ref={ref}
            role="menuitem"
            style={{ ...style, ...rippleStyle }}
            {...nestedMenuProps}
            {...props}
            {...rippleHandlers}
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
)`
  ${rippleStyle}

  /** Styling for items that have nested menus */
  [aria-expanded='true'] {
    background: ${({ theme: { colors } }) => colors.ui1};
  }
`

const NestedMenuIndicator = styled(ArrowRight).withConfig({
  shouldForwardProp,
})`
  color: ${({ theme }) => theme.colors.text1};
  ${size}
`
