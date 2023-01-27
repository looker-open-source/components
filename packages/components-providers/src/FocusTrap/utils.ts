/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

// The following pulls heavily from https://github.com/focus-trap/focus-trap
// with the main differences being:
// 1. Only need the activate/deactivate functions & associated utils –
// multiple focus traps are managed with FocusTrapProvider
// 2. No need for most of the configurable features
// 3. The text of an input should not be selected on focus if it is readonly

import type { FocusableElement } from 'tabbable'
import { tabbable, isFocusable, isTabbable } from 'tabbable'
import type { Trap } from '../TrapStack/types'
import type { FocusTrapOptions } from './types'

// Firefox reverts focus to the body when using Select. activeElement keeps
// track of which element should maintain focus after selection
let activeElement: Element | null

// Evergreens support :focus-visible but JSDom still does not, so we must use
// this to check for support before using the selector.
const isFocusVisible = (element = document.activeElement) => {
  try {
    return element?.matches(':focus-visible')
  } catch (e) {
    return true
  }
}

const isSelectableInput = (
  node: FocusableElement
): node is HTMLInputElement => {
  const nodeAsInput = node as HTMLInputElement
  return (
    nodeAsInput.tagName !== undefined &&
    nodeAsInput.tagName.toLowerCase() === 'input' &&
    typeof nodeAsInput.select === 'function' &&
    !nodeAsInput.readOnly
  )
}

const checkFocusLost = () => {
  // If focused landed on body or nothing, return it to previous element
  // otherwise it's probably already on something useful/intentional
  return document.activeElement
    ? document.activeElement.tagName === 'BODY'
    : true
}

export const activateFocusTrap = ({
  element,
  options,
}: Trap<FocusTrapOptions>) => {
  if (options && !options.returnFocusRef.current) {
    // The return focus element may already have been stored if this is an existing trap
    // that has been superseded by a new focus trap and is now being re-activated.
    // If it's empty, store the current focused element
    options.returnFocusRef.current = document.activeElement
  }
  const nodeFocusedBeforeActivation = options?.returnFocusRef?.current
  let firstTabbableNode: FocusableElement = element
  let lastTabbableNode: FocusableElement = element
  let mostRecentlyFocusedNode: FocusableElement | null = null

  const getInitialFocusNodeByPriority = () => {
    // Return the already focused node within element
    if (element.contains(activeElement as Node)) {
      return activeElement
    }

    // Look for data-autofocus b/c React strips autofocus from dom
    // https://github.com/facebook/react/issues/11851
    const autoFocusElement = element.querySelector('[data-autofocus="true"]')
    if (autoFocusElement) {
      return autoFocusElement
    }

    if (isFocusVisible()) {
      // Without autofocus, fallback to a tabbable node by priority, if one exists.
      const inputElements = Array.from(
        element.querySelectorAll('input, textarea, select')
      )
      const tabbableInputElement = inputElements.find(inputElement =>
        isTabbable(inputElement)
      )
      if (tabbableInputElement) {
        return tabbableInputElement
      }

      const footerElement = element.querySelector('footer')
      const firstTabbableFooterElement = footerElement
        ? tabbable(footerElement)[0]
        : null
      if (firstTabbableFooterElement) {
        return firstTabbableFooterElement
      }

      const firstTabbableElement = tabbable(element)[0]
      if (firstTabbableElement) {
        return firstTabbableElement
      }
    }

    // In the absence of autofocus and any tabbable element, the surface will have initial focus.
    const surfaceElement = element.querySelector(
      '[data-overlay-surface="true"]'
    )
    if (surfaceElement) {
      return surfaceElement
    }

    // default to element
    return element
  }

  const getInitialFocusNode = () => {
    const node = getInitialFocusNodeByPriority()
    const noFocusableNode = !node || !isFocusable(node)
    if (isFocusVisible() && noFocusableNode) {
      throw new Error(
        'Your focus trap needs to have at least one focusable element'
      )
    } else if (noFocusableNode) {
      return null
    }
    return node as FocusableElement
  }

  const updateTabbableNodes = () => {
    const tabbableNodes = tabbable(element)
    firstTabbableNode = tabbableNodes[0] || getInitialFocusNode()
    lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode()
  }

  const tryFocus = (node: FocusableElement | null) => {
    if (!node || node === document.activeElement) return
    if (!node.focus) {
      tryFocus(getInitialFocusNode())
      return
    }
    node.focus()
    mostRecentlyFocusedNode = node
    if (isSelectableInput(node)) {
      node.select()
    }
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  const checkPointerDown = function (e: MouseEvent | TouchEvent) {
    if (element.contains(e.target as Node)) {
      activeElement = e.target as Element
    } else if (options?.clickOutsideDeactivates) {
      deactivate()
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  const checkFocusIn = (e: FocusEvent) => {
    if (element.contains(e.target as Node)) {
      activeElement = e.target as Element
      return
    }
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (e.target instanceof Document) {
      return
    }
    e.stopImmediatePropagation()
    tryFocus(mostRecentlyFocusedNode || getInitialFocusNode())
  }

  const checkKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab' || e.keyCode === 9) {
      // Hijack Tab events on the first and last focusable nodes of the trap,
      // in order to prevent focus from escaping. If it escapes for even a
      // moment it can end up scrolling the page and causing confusion so we
      // kind of need to capture the action at the keydown phase.
      updateTabbableNodes()
      if (e.shiftKey && e.target === firstTabbableNode) {
        e.preventDefault()
        tryFocus(lastTabbableNode)
        return
      }
      if (!e.shiftKey && e.target === lastTabbableNode) {
        e.preventDefault()
        tryFocus(firstTabbableNode)
      }
    }
  }

  document.addEventListener('focusin', checkFocusIn, true)
  document.addEventListener('mousedown', checkPointerDown, {
    capture: true,
    passive: false,
  })
  document.addEventListener('touchstart', checkPointerDown, {
    capture: true,
    passive: false,
  })
  document.addEventListener('keydown', checkKey, {
    capture: true,
    passive: false,
  })

  const t = setTimeout(() => {
    // We use the default document activeElement because it will cover a
    // superset of elements that we do not account for (or need to) with
    // our internally maintained version of activeElement.
    tryFocus(getInitialFocusNode())
  }, 0)

  // Deactivate function
  const deactivate = () => {
    clearTimeout(t)
    document.removeEventListener('focusin', checkFocusIn, true)
    document.removeEventListener('mousedown', checkPointerDown, true)
    document.removeEventListener('touchstart', checkPointerDown, true)
    document.removeEventListener('keydown', checkKey, true)

    // If focus lands on the body, move it back to where it was before the trap
    if (checkFocusLost() && nodeFocusedBeforeActivation) {
      const elementToFocus = nodeFocusedBeforeActivation as HTMLElement
      // When returning focus to the element focused prior to focus trap activation
      // opening the tooltip at that moment is undesirable
      elementToFocus.setAttribute('data-notooltip', 'true')
      elementToFocus.focus()
      // Clear the data attribute immediately so that tooltip will work the next time
      elementToFocus.removeAttribute('data-notooltip')
    }
  }
  return deactivate
}
