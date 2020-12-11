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
  ReactNode,
  Ref,
} from 'react'
import { UsePopoverResponseDom } from '../Popover'
import { useForkedRef } from '../utils'
import {
  useTooltip,
  UseTooltipProps,
  UseTooltipResponseDom,
} from './useTooltip'

type TooltipRenderProp = (props: UseTooltipResponseDom) => ReactNode

export interface TooltipProps extends UseTooltipProps, UsePopoverResponseDom {
  content: ReactNode
  /**
   * Component to wrap. The HOC will listen for mouse events on this component, maintain the
   * state of isOpen accordingly, and pass that state into the children or "trigger" element
   */
  children: ReactNode | TooltipRenderProp
}

function isRenderProp(
  children: ReactNode | TooltipRenderProp
): children is TooltipRenderProp {
  return typeof children === 'function'
}

export const Tooltip = forwardRef(
  (
    {
      // Props from Popover
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHaspopup,
      onClick,

      children,
      ...props
    }: TooltipProps,

    // ref from Popover
    forwardedRef: Ref<any>
  ) => {
    const { domProps, tooltip } = useTooltip({
      // ariaExpanded=true indicates an open Popover – disable the tooltip
      disabled: ariaExpanded,
      ...props,
    })
    const { ref: tooltipRef, ...restDomProps } = domProps
    const ref = useForkedRef(tooltipRef, forwardedRef)

    let target = children

    if (isValidElement(children)) {
      target = cloneElement(children, {
        'aria-expanded': ariaExpanded,
        'aria-haspopup': ariaHaspopup,
        onClick,
        ref,
        ...restDomProps,
        className:
          `${children.props.className || ''} ${
            restDomProps.className
          }`.trim() || undefined,
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
