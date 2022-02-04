/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type {
  CompatibleHTMLProps,
  DensityRamp,
  ExtendedStatefulColor,
} from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type {
  FlattenSimpleInterpolation,
  Interpolation,
} from 'styled-components'
import styled, { css } from 'styled-components'
import { mergeClassNames, useCallbackRef, useMeasuredElement } from '../utils'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import type {
  ListItemColorProp,
  ListItemRole,
  ListItemStatefulProps,
} from './types'
import { listItemColorOptions } from './types'
import { listItemBackgroundColor, listItemPaddingX } from './utils'

const Button = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  font-family: inherit;
`
const Link = styled.a``
const Div = styled.div``

// Use listItemLabelCSS to target the internal button / link / div CSS of ListItem
export const listItemContentCSS = (
  style: FlattenSimpleInterpolation | Interpolation<any>
) => css`
  > ${Button}, > ${Link}, > ${Div} {
    ${style}
  }
`

/**
 * @deprecated Use `listItemContentCSS` instead
 */
export const listItemLabelCSS = listItemContentCSS

export type ListItemContentProps = CompatibleHTMLProps<HTMLElement> &
  ListItemStatefulProps &
  ListItemColorProp & {
    cursorPointer?: boolean
    density?: DensityRamp
    disabled?: boolean
    itemRole?: ListItemRole
    /**
     * Determines if ripple effect is enabled or disabled.
     * Used primarily when parent component should handle
     * ripple effect like with NavTree.
     * @default true
     */
    ripple?: boolean
  }

export const ListItemContent = styled(
  forwardRef(
    (
      {
        className,
        children,
        color,
        itemRole = 'button',
        ripple = true,
        selected,
        style,
        ...props
      }: ListItemContentProps,
      forwardedRef: Ref<HTMLElement | HTMLButtonElement>
    ) => {
      // find the dimensions of button for ripple behavior
      const [element, ref] = useCallbackRef(forwardedRef)
      const [{ height, width }] = useMeasuredElement(element)

      const {
        callbacks,
        className: rippleClassName,
        style: rippleStyle,
      } = useRipple({
        bounded: true,
        color:
          selected &&
          listItemColorOptions.includes(color as ExtendedStatefulColor)
            ? (color as ExtendedStatefulColor)
            : 'neutral',
        height,
        width,
      })

      const rippleHandlers = useRippleHandlers(
        callbacks,
        {
          ...pick({ ...props }, rippleHandlerKeys),
        },
        props.disabled
      )

      const rippleProps = ripple
        ? {
            className: mergeClassNames([className, rippleClassName]),
            ref,
            ...rippleHandlers,
            style: { ...style, ...rippleStyle },
          }
        : { className, ref, style }

      if (!props.disabled && itemRole === 'link') {
        return (
          <Link {...props} {...rippleProps}>
            {children}
          </Link>
        )
      } else if (itemRole === 'none') {
        return (
          <Div {...props} {...rippleProps}>
            {children}
          </Div>
        )
      }

      return (
        <Button {...props} {...rippleProps} type="button">
          {children}
        </Button>
      )
    }
  )
)`
  ${listItemBackgroundColor}
  ${rippleStyle}

  align-items: center;
  border: none;
  color: inherit;
  cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : undefined)};
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;

  padding: 0; /* Remove default top and bottom padding */
  ${({ density }) => listItemPaddingX(density)}

  /*
    Supports absolutely positioned box-shadow
  */
  position: relative;

  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`
