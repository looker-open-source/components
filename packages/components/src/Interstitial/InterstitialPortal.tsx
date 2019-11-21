/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { forwardRef, Ref, useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { CustomizableModalAttributes } from '../Modal/Modal'
import { getInterstitialRoot } from './interstitialRoot'

export const InterstitialPortal = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLDivElement>) => {
    const el = useRef(document.createElement('div'))

    useEffect(() => {
      const modalRoot = getInterstitialRoot()
      if (!modalRoot) return

      const elCurrent = el.current
      modalRoot.appendChild(elCurrent)

      return () => {
        modalRoot.removeChild(elCurrent)
      }
    }, [el])

    const content = (
      <InvisiBox ref={ref} zIndex={CustomizableModalAttributes.zIndex}>
        {children}
      </InvisiBox>
    )

    return createPortal(content, el.current)
  }
)

InterstitialPortal.displayName = 'InterstitialPortal'

const InvisiBox = styled.div<{ zIndex?: number }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  align-items: center;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: ${props => props.zIndex};

  * {
    pointer-events: auto;
  }
`
