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

import { CompatibleHTMLProps, transitions } from '@looker/design-tokens'
import React, {
  createContext,
  forwardRef,
  Ref,
  useContext,
  useEffect,
} from 'react'
import styled from 'styled-components'
import { DialogContext } from '../Dialog'
import { useCallbackRef, useMeasuredElement } from '../utils'

export const PanelsContext = createContext<ClientRect | null>(null)

const PanelsLayout = forwardRef(
  (
    props: CompatibleHTMLProps<HTMLDivElement>,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [element, ref] = useCallbackRef(forwardedRef)
    const [rect, refreshDomRect] = useMeasuredElement(element)

    const dialogContext = useContext(DialogContext)
    const hasAnimation = dialogContext.id !== ''

    // Changes to position aren't captured by useMeasuredElement(ResizeObserver)
    // so if Panels is rendered in a Drawer or Dialog, we need to update the dom rect
    // once the animation is done
    useEffect(() => {
      let t: NodeJS.Timeout
      if (hasAnimation) {
        t = setTimeout(() => {
          refreshDomRect()
          // moderate is the transition duration for Drawer/Dialog
        }, transitions.moderate + 20)
      }
      return () => {
        clearTimeout(t)
      }
      // Any change to left or top could indicate mid-animation, so we check again
    }, [hasAnimation, rect.left, rect.top, refreshDomRect])

    return (
      <PanelsContext.Provider value={rect}>
        <div ref={ref} {...props} />
      </PanelsContext.Provider>
    )
  }
)

PanelsLayout.displayName = 'PanelsLayout'

export const Panels = styled(PanelsLayout)`
  height: 100%;
  width: 100%;
`
