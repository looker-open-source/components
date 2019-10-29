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

import React, { FC, MouseEvent, cloneElement, Children } from 'react'
import { Placement } from 'popper.js'
import { useTooltip } from '../Tooltip'
import { MenuCloneProps } from './Menu'

export interface MenuDisclosureProps extends MenuCloneProps {
  children: JSX.Element
  tooltip?: string
  tooltipPlacement?: Placement
}

type MouseEventCallback = (e: MouseEvent) => void

function wrapCallback(
  cbParent: MouseEventCallback,
  cbChild?: MouseEventCallback
) {
  return (e: MouseEvent) => {
    cbParent(e)
    cbChild && cbChild(e)
  }
}

export const MenuDisclosure: FC<MenuDisclosureProps> = ({
  children,
  disabled,
  isOpen,
  setOpen,
  tooltip,
  tooltipPlacement,
  triggerRef,
}) => {
  const { eventHandlers, tooltip: renderedTooltip, ref } = useTooltip({
    content: tooltip,
    disabled: isOpen,
    placement: tooltipPlacement || 'top',
    triggerRef,
  })

  const handleClick = () => setOpen && setOpen(!isOpen)

  const allCallbacks = { ...eventHandlers, onClick: handleClick }

  const cloned = Children.map(children, (child: JSX.Element) => {
    const childProps = child.props

    const wrappedCallbacks: { [key: string]: MouseEventCallback } = {}
    Object.keys(allCallbacks).forEach(cbName => {
      const cbParent = Reflect.get(allCallbacks, cbName)
      wrappedCallbacks[cbName] = wrapCallback(cbParent, childProps[cbName])
    })

    return cloneElement(child, {
      ...wrappedCallbacks,
      disabled,
      ref,
    })
  })

  return (
    <>
      {renderedTooltip}
      {cloned}
    </>
  )
}
