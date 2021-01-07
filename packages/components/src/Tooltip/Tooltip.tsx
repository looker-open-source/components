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

import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  Ref,
} from 'react'
import { MenuDomProps } from '../Menu'
import { mergeHandlers, useForkedRef } from '../utils'
import {
  useTooltip,
  UseTooltipProps,
  UseTooltipResponseDom,
} from './useTooltip'

type TooltipRenderProp = (props: UseTooltipResponseDom) => ReactNode

export interface TooltipProps extends UseTooltipProps, Partial<MenuDomProps> {
  /**
   * Component to receive tooltip behavior or render prop function that
   * receives tooltip props and returns a component
   */
  children:
    | ReactElement<UseTooltipResponseDom & MenuDomProps>
    | TooltipRenderProp
}

function isRenderProp(
  children: ReactNode | TooltipRenderProp
): children is TooltipRenderProp {
  return typeof children === 'function'
}

export const Tooltip = forwardRef(
  (
    {
      // Props from Popover or Menu
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHaspopup,
      disabled,
      onClick,

      children,
      ...props
    }: TooltipProps,

    // ref from Popover
    forwardedRef: Ref<any>
  ) => {
    const { domProps, tooltip } = useTooltip({
      // ariaExpanded=true indicates an open Popover – disable the tooltip
      disabled: disabled || ariaExpanded,
      ...props,
    })
    const {
      className,
      onBlur,
      onFocus,
      onMouseOut,
      onMouseOver,
      ref: tooltipRef,
      ...restDomProps
    } = domProps

    const ref = useForkedRef(tooltipRef, forwardedRef)

    let target: ReactNode = children

    if (isValidElement(children)) {
      const handlers = {
        onBlur,
        onClick,
        onFocus,
        onMouseOut,
        onMouseOver,
      }

      const mergedHandlers = Object.keys(handlers).reduce(
        (acc: Partial<typeof handlers>, key) => {
          return {
            ...acc,
            [key]: mergeHandlers(handlers[key], children.props[key]),
          }
        },
        {}
      )

      target = cloneElement(children, {
        ...mergedHandlers,
        ...restDomProps,
        // Menu
        'aria-controls': ariaControls,
        // Popover
        'aria-expanded': ariaExpanded,
        'aria-haspopup': ariaHaspopup,
        // Tooltip
        className:
          `${children.props.className || ''} ${className}`.trim() || undefined,
        ref,
      })
    } else if (isRenderProp(children)) {
      target = children(domProps)
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `Element "${typeof target}" can't be used as target for Tooltip`
      )
    }

    return (
      <>
        {tooltip}
        {target}
      </>
    )
  }
)
