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

import React, {
  FC,
  MouseEvent,
  cloneElement,
  Children,
  useContext,
  useCallback,
  useState,
} from 'react'
import { Placement } from 'popper.js'
import { useTooltip } from '../Tooltip'
import { MenuContext } from './MenuContext'

export interface MenuDisclosureProps {
  /**
   * Direct child be a single JSX Element that accepts
   * onClick, onBlur, onFocus, onMouseOver, onMouseOut and disabled
   * unable to enforce typing of props https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34713
   */
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
  tooltip,
  tooltipPlacement,
}) => {
  const {
    disabled,
    id,
    showDisclosure,
    isOpen,
    setOpen,
    triggerElement,
    triggerCallbackRef,
  } = useContext(MenuContext)

  const {
    eventHandlers: { onFocus, onBlur, ...eventHandlers },
    tooltip: renderedTooltip,
  } = useTooltip({
    content: tooltip,
    disabled: isOpen,
    placement: tooltipPlacement || 'top',
    triggerElement,
  })

  const [focused, setFocused] = useState(false)
  function handleFocus() {
    setFocused(true)
    onFocus()
  }
  function handleBlur() {
    setFocused(false)
    onBlur()
  }

  const handleClick = useCallback(() => {
    setOpen && setOpen(!isOpen)
  }, [setOpen, isOpen])

  if (!showDisclosure && !isOpen && !focused) return null

  const allCallbacks = {
    ...(tooltip ? eventHandlers : {}),
    onBlur: handleBlur,
    onClick: handleClick,
    onFocus: handleFocus,
  }

  const cloned = Children.map(children, (child: JSX.Element) => {
    const childProps = child.props

    const wrappedCallbacks: { [key: string]: MouseEventCallback } = {}
    Object.keys(allCallbacks).forEach(cbName => {
      const cbParent = Reflect.get(allCallbacks, cbName)
      wrappedCallbacks[cbName] = wrapCallback(cbParent, childProps[cbName])
    })

    return cloneElement(child, {
      ...wrappedCallbacks,
      'aria-controls': id,
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      className: `${childProps.className || ''}${isOpen ? ' active' : ''}`,
      disabled,
      id: `button-${id}`,
      ref: triggerCallbackRef,
    })
  })

  return (
    <>
      {renderedTooltip}
      {cloned}
    </>
  )
}
