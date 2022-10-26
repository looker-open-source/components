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

import type { ReactNode, Ref, RefObject } from 'react'
import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { mergeHandlers, useForkedRef, useHovered } from '../utils'
import type { UsePopoverProps, UsePopoverResponseDom } from './usePopover'
import { usePopover } from './usePopover'

export type PopoverRenderProp = (props: UsePopoverResponseDom) => ReactNode

const isRenderProp = (
  children: ReactNode | PopoverRenderProp
): children is PopoverRenderProp => typeof children === 'function'

export interface PopoverProps extends UsePopoverProps {
  /**
   * Component to wrap. The HOC will listen for mouse events on this
   * component, maintain the state of isOpen accordingly, and pass that state into
   * the Popover renderProp.
   */
  children: ReactNode | PopoverRenderProp

  /**
   * The element which hovering on/off of will show/hide the triggering element
   */
  hoverDisclosureRef?: HTMLElement | null | RefObject<HTMLElement>
}

export const popoverPropKeys: Array<keyof PopoverProps> = [
  'content',
  'onClose',
  'placement',
  'portalElement',
  'pin',
  'disableScrollLock',
  'triggerElement',
  'focusTrap',
  'scrollLock',
  'surface',
  'disabled',
  'isOpen',
  'canClose',
  'setOpen',
  'triggerToggle',
  'cancelClickOutside',
  'hoverDisclosureRef',
  'ariaLabel',
]

export const Popover = forwardRef(
  (
    { children, hoverDisclosureRef, ...props }: PopoverProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    forwardedRef: Ref<any>
  ) => {
    const { domProps, isOpen, popover } = usePopover(props)

    const { onClick, ref: popoverRef, ...restDomProps } = domProps

    const ref = useForkedRef(popoverRef, forwardedRef)

    if (isValidElement(children)) {
      children = cloneElement(children, {
        ...restDomProps,
        onClick: mergeHandlers(onClick, children.props.onClick),
        ref,
      })
    } else if (isRenderProp(children)) {
      children = children(domProps)
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `Element "${typeof children}" can't be used as target for Popover`
      )
    }

    const [isHovered] = useHovered(hoverDisclosureRef)
    const triggerShown = isHovered || isOpen

    return (
      <>
        {popover}
        {triggerShown && children}
      </>
    )
  }
)
