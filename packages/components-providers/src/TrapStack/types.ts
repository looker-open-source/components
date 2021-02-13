/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

export interface Trap<O extends {} = {}> {
  element: HTMLElement
  options?: O
}

export interface TrapStackContextProps<O extends {} = {}> {
  /**
   * Stores the element for the active trap (null if none are active)
   */
  activeTrapRef?: MutableRefObject<HTMLElement | null>
  /**
   * @private
   */
  addTrap?: (id: string, trap: Trap<O>) => void
  /**
   * Disables the current trap (no trap will be enabled as a result)
   */
  disableCurrentTrap?: () => void
  /**
   * Enables the trap stacked on top
   */
  enableCurrentTrap?: () => void
  /**
   * @private
   */
  getTrap?: (id: string) => Trap<O> | null
  /**
   * @private
   */
  removeTrap?: (id: string) => void
}

export interface TrapMap<O extends {} = {}> {
  [key: string]: Trap<O>
}
