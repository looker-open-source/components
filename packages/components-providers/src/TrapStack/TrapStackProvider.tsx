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

import noop from 'lodash/noop'
import React, { Context, FC, useRef, useMemo } from 'react'
import { TrapStackContextProps, ElementMap } from './types'
import { getActiveElement } from './utils'

export interface TrapStackProviderProps {
  activate: (element: HTMLElement) => () => void
  context: Context<TrapStackContextProps>
}

/**
 * Manages "trap" behavior (e.g. scroll lock & focus trap)
 * in a stack of elements (e.g. layered Dialogs & Popovers)
 */
export const TrapStackProvider: FC<TrapStackProviderProps> = ({
  activate,
  context,
  children,
}) => {
  // Stores all available trap elements
  // (map of ids to elements that have traps)
  const registeredElementsRef = useRef<ElementMap>({})
  // stores the current element where scrolling is allowed
  // null if no scroll element is active
  const activeElementRef = useRef<HTMLElement | null>(null)
  // stores the callback to remove the scroll event listener & restore body styles
  const deactivateRef = useRef<() => void>(noop)

  // useMemo: this component probably won't re-render much, but if it does
  // let's not cause unnecessary diffs from useFocusElement in Dialogs and Popovers
  // since those components can be finicky if re-rendered at the wrong moment
  const value = useMemo(() => {
    function getElement(id?: string): HTMLElement | null {
      const registeredElements = registeredElementsRef.current
      return id
        ? registeredElements[id] || null
        : getActiveElement(registeredElements)
    }

    function enableCurrentElement() {
      const newElement = getElement()
      if (newElement !== activeElementRef.current) {
        // Disable the existing element and update the element
        // (whether there's a new element or not)
        activeElementRef.current = newElement
        deactivateRef.current()
        // If there's a new element, activate it and
        // save the deactivate function that is returned
        if (newElement) {
          deactivateRef.current = activate(newElement)
        }
      }
    }

    function disableCurrentElement() {
      deactivateRef.current()
      deactivateRef.current = noop
      activeElementRef.current = null
    }

    function addElement(id: string, element: HTMLElement) {
      registeredElementsRef.current[id] = element
      enableCurrentElement()
    }

    function removeElement(id: string) {
      const existingElement = getElement(id)
      if (existingElement) {
        const registeredElements = registeredElementsRef.current
        delete registeredElements[id]
        enableCurrentElement()
      }
    }

    return {
      activeElementRef,
      addElement,
      disableCurrentElement,
      enableCurrentElement,
      getElement,
      removeElement,
    }
  }, [activate])

  return <context.Provider value={value}>{children}</context.Provider>
}
