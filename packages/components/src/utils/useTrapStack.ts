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

import { TrapStackContextProps } from '@looker/components-providers'
import { Context, Ref, useContext, useEffect } from 'react'
import { useID } from './useID'
import { useCallbackRef } from './useCallbackRef'

export interface UseTrapStackProps<T extends HTMLElement = HTMLElement> {
  context: Context<TrapStackContextProps>
  /**
   * Turns off functionality completely, for use in components
   * where trap behavior can be optionally disabled
   */
  disabled?: boolean
  /**
   * A forwarded ref to be merged with the ref returned in the hook result
   */
  ref?: Ref<T>
}

/**
 * Adds & removes an element to & from a context managing a
 * stack of "traps" – e.g. scroll lock or focus trap in one or more
 * Dialogs & Popovers
 */
export const useTrapStack = <T extends HTMLElement = HTMLElement>({
  context,
  disabled = false,
  ref,
}: UseTrapStackProps<T>): [T | null, (node: T | null) => void] => {
  const id = useID()
  const [element, callbackRef] = useCallbackRef(ref)
  const {
    addElement,
    removeElement,
    disableCurrentElement,
    enableCurrentElement,
  } = useContext(context)

  useEffect(() => {
    if (!addElement) {
      // eslint-disable-next-line no-console
      console.warn(
        `${context.displayName} is missing. Please wrap all @looker/components in a ComponentsProvider.`
      )
    }
  }, [addElement, context])

  useEffect(() => {
    if (element) {
      // If the trap is disabled and there is an existing trap
      // (e.g. a Popover or Dialog inside another Popover or Dialog)
      // we need to manually disable the existing trap so that elements
      // inside the new Popover/Dialog won't be "trapped out"
      if (disabled) {
        disableCurrentElement?.()
      } else {
        addElement?.(id, element)
      }
    }
    return () => {
      if (disabled) {
        enableCurrentElement?.()
      } else {
        removeElement?.(id)
      }
    }
  }, [
    disabled,
    id,
    element,
    addElement,
    removeElement,
    disableCurrentElement,
    enableCurrentElement,
  ])

  return [element, callbackRef]
}
