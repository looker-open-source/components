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

import { createContext, KeyboardEvent, RefObject } from 'react'
import noop from 'lodash/noop'

export interface MenuContextProps {
  disabled?: boolean
  id?: string
  showDisclosure?: boolean
  isOpen?: boolean
  setOpen?: (isOpen: boolean) => void
  triggerElement?: HTMLElement | null
  triggerCallbackRef?: (node: HTMLElement | null) => void
  groupedMenusRef?: RefObject<HTMLElement>
}

export interface MenuItemContextProps {
  compact?: boolean
  renderIconPlaceholder?: boolean
  setRenderIconPlaceholder?: (state: boolean) => void
  handleArrowUp?: (e: KeyboardEvent<HTMLLIElement>) => void
  handleArrowDown?: (e: KeyboardEvent<HTMLLIElement>) => void
}

const menuContext: MenuContextProps = {}
const menuItemContext: MenuItemContextProps = {}

export const MenuContext = createContext(menuContext)
export const MenuItemContext = createContext(menuItemContext)
