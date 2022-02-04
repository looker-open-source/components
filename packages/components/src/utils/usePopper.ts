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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import cloneDeep from 'lodash/cloneDeep'
import concat from 'lodash/concat'
import merge from 'lodash/merge'
import type { CSSProperties } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Instance, Options, State } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import type { ElementOrRef } from './getCurrentNode'
import { getCurrentNode } from './getCurrentNode'
import { useCallbackRef } from './useCallbackRef'

export interface UsePopperProps {
  anchor: ElementOrRef
  target?: ElementOrRef
  options: Partial<Options> & { placement: Options['placement'] }
}

export function usePopper({ anchor, target, options }: UsePopperProps) {
  const [styles, setStyles] = useState<State['styles']>({
    popper: {
      left: '0',
      margin: '0',
      position: 'fixed',
      // Initially render off the screen while PopperJS calculates position
      top: '-9999px',
    },
  })
  const [truePlacement, setTruePlacement] = useState(options.placement)
  const popperInstanceRef = useRef<Instance>()
  const [targetElement, targetRef] = useCallbackRef<HTMLElement>()

  const mergedOptions = useMemo(
    () =>
      merge(options, {
        modifiers: concat(options && options.modifiers, [
          {
            // Don't use popperjs' built-in applyStyles – we'll add to state and apply them the react way
            enabled: false,
            name: 'applyStyles',
          },
          {
            // Custom modifier to update truePlacement state
            enabled: true,
            fn: ({ state: { placement } }) => setTruePlacement(placement),
            name: 'update-placement',
            phase: 'afterWrite',
          },
          {
            // Custom modifier to update styles state (needs to be separate and after update-placement)
            enabled: true,
            fn: ({ state: { styles } }) =>
              // styles is mutable object, deep clone
              setStyles(cloneDeep(styles)),
            name: 'update-styles',
            phase: 'afterWrite',
          },
          {
            enabled: true,
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
              // 8px away from edge of window
              padding: 8,
            },
          },
        ]),
        strategy: 'fixed',
      }),
    [options]
  )

  useEffect(() => {
    const anchorNode = getCurrentNode(anchor)
    const targetNode = target ? getCurrentNode(target) : targetElement
    if (anchorNode && targetNode) {
      popperInstanceRef.current = createPopper(
        anchorNode,
        targetNode,
        mergedOptions
      )
    }
    return () => {
      popperInstanceRef.current && popperInstanceRef.current.destroy()
    }
  }, [anchor, target, targetElement, mergedOptions])

  return {
    placement: truePlacement,
    popperInstanceRef,
    style: styles.popper as CSSProperties,
    targetRef,
  }
}
