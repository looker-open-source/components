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

import React, { FC, RefObject, useRef, useState } from 'react'
import { useCallbackRef, useHovered } from '../utils'
import { MenuContext } from './MenuContext'

export interface MenuProps {
  /**
   * Disables the Menu, passed to child of MenuDisclosure
   */
  disabled?: boolean

  /**
   * The element which hovering on/off of will show/hide the disclosure element
   */
  hoverDisclosureRef?: HTMLElement | null | RefObject<HTMLElement>

  /**
   * Initial state of Menu (or use for controlled menu)
   * @default false
   */
  isOpen?: boolean
  /**
   * Use for controlled menu
   */
  setOpen?: (isOpen: boolean) => void
}
/** @component */
export const Menu: FC<MenuProps> = ({
  children,
  disabled,
  hoverDisclosureRef,
  isOpen: controlledIsOpen = false,
  setOpen: controlledSetOpen,
}) => {
  const isControlled = useRef(controlledSetOpen !== undefined)
  const [isOpen, setOpen] = useState(controlledIsOpen)
  const [triggerElement, triggerCallbackRef] = useCallbackRef()
  const [isHovered] = useHovered(hoverDisclosureRef)

  const context = {
    disabled,
    isHovered,
    isOpen: isControlled.current ? controlledIsOpen : isOpen,
    setOpen: isControlled.current ? controlledSetOpen : setOpen,
    triggerCallbackRef,
    triggerElement,
  }

  return <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
}
