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

import {
  reset,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  fadeIn,
} from '@looker/design-tokens'
import { Placement } from '@popperjs/core'
import React, {
  CSSProperties,
  DOMAttributes,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
} from 'react'
import { HotKeys } from 'react-hotkeys'
import styled from 'styled-components'
import { ModalContext } from '../Modal'
import { OverlaySurfaceArrow } from './OverlaySurfaceArrow'

export interface SurfaceStyleProps extends BorderProps, BoxShadowProps {
  color?: string
  backgroundColor?: string
  border?: string
  borderColor?: string
}

export interface OverlaySurfaceProps extends SurfaceStyleProps {
  arrow?: boolean
  arrowProps: { ref: Ref<HTMLDivElement>; style: CSSProperties }
  children: ReactNode
  eventHandlers?: DOMAttributes<{}>
  placement: Placement
  style?: CSSProperties
  zIndex?: number
}

export const OverlaySurface = forwardRef(
  (props: OverlaySurfaceProps, ref: Ref<HTMLDivElement>) => {
    const {
      arrow,
      arrowProps,
      children,
      eventHandlers,
      placement,
      style,
      zIndex,
      ...innerProps
    } = props
    const { closeModal } = useContext(ModalContext)

    return (
      <Outer
        ref={ref}
        zIndex={zIndex}
        style={style}
        {...eventHandlers}
        tabIndex={-1}
      >
        <HotKeys
          className="hotkeys"
          keyMap={{
            CLOSE_MODAL: {
              action: 'keyup',
              name: 'Close Modal',
              sequence: 'esc',
            },
          }}
          handlers={{
            CLOSE_MODAL: () => {
              closeModal && closeModal()
            },
          }}
        >
          <Inner {...innerProps}>
            {children}
            {arrow !== false && (
              <OverlaySurfaceArrow
                data-placement={placement}
                {...innerProps}
                {...arrowProps}
              />
            )}
          </Inner>
        </HotKeys>
      </Outer>
    )
  }
)

OverlaySurface.displayName = 'OverlaySurface'

const Outer = styled.div<{ zIndex?: number }>`
  ${reset};
  /* PopperJS adds position: fixed via the style prop
  but this fixes an intermittent "flash" of un-positioned tooltip
  while the PopperJS instance is initializing */
  position: fixed;
  animation: ${fadeIn} 150ms ease-in;
  overflow: visible;
  z-index: ${props => props.zIndex};

  &:focus {
    outline: none;
  }

  /* react-hotkeys focus suppression */
  & > div.hotkeys:focus {
    outline: none;
  }
`

const Inner = styled.div<SurfaceStyleProps>`
  ${reset}
  ${border}
  ${boxShadow}
  ${color}
  &:focus {
    outline: none;
  }
`
