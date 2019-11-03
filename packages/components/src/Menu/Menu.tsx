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
  Children,
  cloneElement,
  FC,
  RefObject,
  useRef,
  useState,
} from 'react'

export interface MenuCloneProps {
  disabled?: boolean
  isOpen?: boolean
  setOpen?: (value: boolean) => void
  triggerRef?: RefObject<HTMLElement>
}

export interface MenuProps {
  children: JSX.Element[]
  /**
   * Disables the Menu, passed to child of MenuDisclosure
   */
  disabled?: boolean

  /**
   * Initial state of Menu
   * @default false
   */
  isOpen?: boolean
}

export function useMenu(disabled?: boolean, initialIsOpen = false) {
  const triggerRef = useRef<HTMLElement>(null)
  const [isOpen, setOpen] = useState(initialIsOpen)
  return { disabled, isOpen, setOpen, triggerRef }
}

/** @component */
export const Menu: FC<MenuProps> = ({ children, disabled, isOpen }) => {
  const menu = useMenu(disabled, isOpen)

  const cloned = Children.map(children, (child: JSX.Element) => {
    return cloneElement(child, menu)
  })
  return <>{cloned}</>
}
