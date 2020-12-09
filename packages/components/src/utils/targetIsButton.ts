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

import { MouseEvent as ReactMouseEvent } from 'react'

const checkForButton = (
  element: Element,
  containingAncestor: Element
): boolean => {
  if (element === containingAncestor) return false
  if (!element.parentElement) return false
  if (element.tagName === 'BUTTON') {
    return true
  }
  return checkForButton(element.parentElement, containingAncestor)
}
/**
 * Walks up the dom tree from an event's target to its currentTarget
 * to determine whether a mousedown/click was located within a button
 * @param e mouse event
 */
export const targetIsButton = (e: ReactMouseEvent<HTMLElement>) => {
  return checkForButton(e.target as Element, e.currentTarget as Element)
}
