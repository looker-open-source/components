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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import merge from 'lodash/merge'
import { useEffect, useMemo, useRef } from 'react'
import { createPopper, Instance, Options } from '@popperjs/core'
import { ElementOrRef, getCurrentNode } from './getCurrentNode'
import { useCallbackRef } from './useCallbackRef'

export function usePopper(
  anchor: ElementOrRef,
  target?: ElementOrRef,
  arrow?: boolean,
  options?: Options
) {
  const popperInstanceRef = useRef<Instance>()
  const [targetElement, targetRef] = useCallbackRef<HTMLElement>()
  const [arrowElement, arrowRef] = useCallbackRef<HTMLElement>()
  const optionsWithArrow = useMemo(
    () =>
      arrow
        ? merge(
            {
              modifiers: [
                { name: 'arrow', options: { element: arrowElement } },
              ],
            },
            options
          )
        : options,
    []
  )

  useEffect(() => {
    const anchorNode = getCurrentNode(anchor)
    const targetNode = target ? getCurrentNode(target) : targetElement
    if (anchorNode && targetNode) {
      popperInstanceRef.current = createPopper(
        anchorNode,
        targetNode,
        optionsWithArrow
      )
    }
  }, [anchor, target, targetElement, arrow, arrowElement, options])

  return { arrowRef, popperInstanceRef, targetRef }
}
