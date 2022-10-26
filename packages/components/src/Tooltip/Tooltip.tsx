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

import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  Ref,
} from 'react'
import React, { cloneElement, forwardRef, isValidElement } from 'react'
import { mergeClassNames, useWrapEvent } from '../utils'
import type { TooltipProps, TooltipRenderProp } from './types'
import { useTooltip } from './useTooltip'

function isRenderProp(
  children: ReactNode | TooltipRenderProp
): children is TooltipRenderProp {
  return typeof children === 'function'
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

type RefAttributes = {
  /**
   * @deprecated not actually forwarded, will be removed in 3.x release
   */
  ref?: Ref<unknown>
}

export const Tooltip: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipProps> & RefAttributes
> = forwardRef(
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
    _: Ref<unknown>
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
      ...restDomProps
    } = domProps

    let target: ReactNode = children

    const childProps = isValidElement(children) ? children.props : undefined

    const wrappedHandlers = {
      onBlur: useWrapEvent(onBlur, childProps?.onBlur),
      onClick: useWrapEvent(onClick || noop, childProps?.onClick),
      onFocus: useWrapEvent(onFocus, childProps?.onFocus),
      onMouseOut: useWrapEvent(onMouseOut, childProps?.onMouseOut),
      onMouseOver: useWrapEvent(onMouseOver, childProps?.onMouseOver),
    }

    if (isValidElement(children)) {
      target = cloneElement(children, {
        ...wrappedHandlers,
        ...restDomProps,
        // Menu
        'aria-controls': ariaControls,
        // Popover
        'aria-expanded': ariaExpanded,
        'aria-haspopup': ariaHaspopup,
        // Tooltip
        className: mergeClassNames([className, children.props.className]),
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
