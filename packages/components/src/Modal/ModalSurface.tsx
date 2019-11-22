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

import { CompatibleHTMLProps, reset, theme } from '@looker/design-tokens'
import React, { FC, useContext, useEffect } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { CSSObject, css } from 'styled-components'
import {
  BackgroundColorProps,
  BorderProps,
  BoxShadowProps,
  boxShadow,
  border,
  color,
  LayoutProps,
  layout,
} from 'styled-system'
import { ModalContext } from './ModalContext'

export interface ModalSurfaceProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BorderProps,
    BoxShadowProps,
    BackgroundColorProps,
    LayoutProps {
  surfaceStyle?: CSSObject
  anchor?: 'right'
  animationState?: string
}

export const ModalSurface: FC<ModalSurfaceProps> = ({
  anchor,
  style,
  className,
  ...props
}) => {
  const { close, enableFocusTrap, enableScrollLock } = useContext(ModalContext)

  useEffect(() => {
    enableScrollLock && enableScrollLock()
    const t = window.setTimeout(() => {
      enableFocusTrap && enableFocusTrap()
    }, theme.transitions.durationModerate)
    return () => {
      window.clearTimeout(t)
    }
  }, [enableFocusTrap, enableScrollLock])

  return (
    <HotKeys
      keyMap={{
        CLOSE_MODAL: {
          action: 'keyup',
          name: 'Close Modal',
          sequence: 'esc',
        },
      }}
      handlers={{
        CLOSE_MODAL: () => {
          close && close()
        },
      }}
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: anchor === 'right' ? 'flex-end' : 'center',
        width: '100%',
      }}
      // NOTE: Styling is required because react-hotkeys injects a DOM element (`div` by default) that
      // breaks the flex inheritance. Eventually they will offer a React Hook that should allow removal
      // of this workaround.
      //
      // display: contents would be another workaround when it gains broader (corrected) support
    >
      <Style
        className={`surface-overflow ${className}`}
        tabIndex={-1}
        surfaceStyle={style as CSSObject}
        {...props}
      />
    </HotKeys>
  )
}

const surfaceTransition = () => css`
  ${props =>
    `${props.theme.transitions.durationModerate} ${props.theme.easings.ease}`}
`

const Style = styled.div<ModalSurfaceProps>`
  ${reset}
  ${boxShadow}
  ${border}
  ${layout}

  ${color}

  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};

  ${props => props.surfaceStyle};

  &:focus {
    outline: none;
  }
`

Style.defaultProps = {
  backgroundColor: 'palette.white',
  borderRadius: 'medium',
  boxShadow: 3,
  color: 'palette.charcoal900',
}
