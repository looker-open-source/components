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
  ReactNode,
  RefObject,
  isValidElement,
  cloneElement,
  FC,
} from 'react'
import { useHovered } from '../utils'
import { Breakpoint } from '../Breakpoint'
import { useDialog, DialogRender, DialogHeader } from '../Dialog'
import {
  usePopover,
  UsePopoverProps,
  UsePopoverResponseDom,
} from './usePopover'

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
  /**
   * Convert popover to full-screen dialog on mobile
   * @default false
   */
  mobileDialog?: boolean
  /**
   * Populate dialog header content when mobileDialog is true
   */
  dialogHeader?: string
}

export const Popover = ({
  children,
  hoverDisclosureRef,
  mobileDialog = false,
  dialogHeader,
  content,
  ...props
}: PopoverProps) => {
  const { domProps, isOpen, popover } = usePopover({ ...props, content })
  const dialogProps = useDialog({
    content: (
      <>
        <DialogHeader>{dialogHeader}</DialogHeader>
        {content}
      </>
    ),
    height: '100vh',
  })

  if (isValidElement(children)) {
    children = cloneElement(children, {
      ...domProps,
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
      <Breakpoint from={mobileDialog ? 1 : 0}>
        {popover}
        {triggerShown && children}
      </Breakpoint>
      {mobileDialog && (
        <Breakpoint from={0} to={0}>
          <DialogRender {...dialogProps}>{children}</DialogRender>
        </Breakpoint>
      )}
    </>
  )
}
