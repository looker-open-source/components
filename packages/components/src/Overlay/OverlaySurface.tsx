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

import { reset, fadeIn } from '@looker/design-tokens'
import { Placement } from '@popperjs/core'
import React, {
  CSSProperties,
  DOMAttributes,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
  useRef,
} from 'react'
import styled from 'styled-components'
import { useGlobalHotkeys, useForkedRef } from '../utils'
import { DialogContext } from '../Dialog'

export interface OverlaySurfaceProps {
  children: ReactNode
  className?: string
  eventHandlers?: DOMAttributes<HTMLElement>
  placement: Placement
  style?: CSSProperties
  zIndex?: number
  maxWidth?: string
}

const OverlaySurfaceLayout = forwardRef(
  (props: OverlaySurfaceProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { children, className, eventHandlers, placement, style } = props
    const { closeModal } = useContext(DialogContext)

    const innerRef = useRef<null | HTMLElement>(null)
    const ref = useForkedRef(forwardedRef, innerRef)

    useGlobalHotkeys('esc', closeModal, innerRef)

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        {...eventHandlers}
        tabIndex={-1}
        data-placement={placement}
      >
        <OverlaySurfaceContentArea tabIndex={-1} data-overlay-surface={true}>
          {children}
        </OverlaySurfaceContentArea>
      </div>
    )
  }
)

OverlaySurfaceLayout.displayName = 'OverlaySurfaceLayout'

export const OverlaySurface = styled(OverlaySurfaceLayout)`
  ${reset}
  animation: ${fadeIn} ease-in;
  animation-duration: ${({ theme }) => `${theme.transitions.quick}ms`};
  max-width: ${({ maxWidth }) => maxWidth};
  overflow: visible;
  z-index: ${({ theme: { zIndexFloor } }) => zIndexFloor || undefined};

  &[data-placement*='top'] {
    padding-bottom: ${({ theme: { space } }) => space.xsmall};
  }

  &[data-placement*='right'] {
    padding-left: ${({ theme: { space } }) => space.xsmall};
  }

  &[data-placement*='bottom'] {
    padding-top: ${({ theme: { space } }) => space.xsmall};
  }

  &[data-placement*='left'] {
    padding-right: ${({ theme: { space } }) => space.xsmall};
  }

  &:focus {
    outline: none;
  }
`

export const OverlaySurfaceContentArea = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
  }
`
