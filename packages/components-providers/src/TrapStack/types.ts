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

import { MutableRefObject } from 'react'

export interface Trap<T extends {} = {}> {
  element: HTMLElement
  options?: T
}

export interface TrapStackContextProps {
  /**
   * Stores the element for the active scroll lock (null if none are active)
   */
  activeTrapRef?: MutableRefObject<HTMLElement | null>
  /**
   * @private
   */
  addTrap?: (id: string, trap: Trap) => void
  /**
   * Disables the current scroll lock (no scroll lock will be enabled as a result)
   */
  disableCurrentTrap?: () => void
  /**
   * Enables the scroll lock stacked on top
   */
  enableCurrentTrap?: () => void
  /**
   * @private
   */
  getTrap?: (id: string) => Trap | null
  /**
   * @private
   */
  removeTrap?: (id: string) => void
}

export interface TrapMap {
  [key: string]: Trap
}
