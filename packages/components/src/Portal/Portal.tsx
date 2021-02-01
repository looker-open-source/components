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

import React, { forwardRef, Ref, useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const rootId = 'modal-root'

export const getPortalRoot = () => {
  const existing = document.getElementById(rootId)

  if (existing) {
    return existing
  } else {
    const newElement = document.createElement('div')
    newElement.id = 'modal-root'
    document.body.appendChild(newElement)

    return newElement
  }
}

interface PortalPlacementProps {
  /**
   * How should content be positioned on screen horizontally
   * @default 'center
   */
  horizontal?: 'center' | 'left' | 'right'

  /**
   * How should content be positioned on screen horizontally
   * @default 'center
   */
  vertical?: 'center' | 'top' | 'bottom'
}

export interface PortalProps extends PortalPlacementProps {
  children: ReactNode
}

export const Portal = forwardRef(
  (props: PortalProps, ref: Ref<HTMLDivElement>) => {
    const el = useRef(document.createElement('div'))

    useEffect(() => {
      const root = getPortalRoot()
      if (!root) return

      const elCurrent = el.current
      root.appendChild(elCurrent)

      return () => {
        root.removeChild(elCurrent)
      }
    }, [el])

    const content = <InvisiBox ref={ref} tabIndex={-1} {...props} />

    return createPortal(content, el.current)
  }
)

Portal.displayName = 'Portal'

const InvisiBox = styled.div<PortalPlacementProps>`
  align-items: ${({ vertical }) =>
    vertical === 'top'
      ? 'flex-start'
      : vertical === 'bottom'
      ? 'flex-end'
      : 'center'};
  bottom: 0;
  display: flex;
  justify-content: ${({ horizontal }) =>
    horizontal === 'left'
      ? 'flex-start'
      : horizontal === 'right'
      ? 'flex-end'
      : 'center'};
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${({ theme: { zIndexFloor } }) => zIndexFloor};

  > * {
    pointer-events: auto;
  }
`
