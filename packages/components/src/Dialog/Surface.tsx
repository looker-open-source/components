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
  CompatibleHTMLProps,
  reset,
  theme,
  omitStyledProps,
} from '@looker/design-tokens'
import React, { FC, useContext, useEffect } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { CSSObject, css } from 'styled-components'
import {
  ColorProps,
  BorderProps,
  BoxShadowProps,
  boxShadow,
  border,
  color,
  LayoutProps,
  layout,
} from 'styled-system'
import { DialogContext } from './DialogContext'

interface SurfaceProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BorderProps,
    BoxShadowProps,
    ColorProps,
    LayoutProps {
  surfaceStyles?: CSSObject
  anchor?: 'right'
  animationState?: string
}

const SurfaceLayout: FC<SurfaceProps> = ({
  anchor,
  surfaceStyles,
  className,
  ...props
}) => {
  const { closeModal, enableFocusTrap, enableScrollLock } = useContext(
    DialogContext
  )

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
          closeModal && closeModal()
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
      <div
        className={`surface-overflow ${className}`}
        style={surfaceStyles as CSSObject}
        {...omitStyledProps(props)}
      />
    </HotKeys>
  )
}

const surfaceTransition = () => css`
  ${(props) =>
    `${props.theme.transitions.durationModerate} ${props.theme.easings.ease}`}
`

export const Surface = styled(SurfaceLayout)`
  ${reset}
  ${boxShadow}
  ${border}
  ${layout}

  ${color}

  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};

  &:focus {
    outline: none;
  }

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateY(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateY(0%);
  }
`

Surface.defaultProps = {
  backgroundColor: 'background',
  borderRadius: 'medium',
  boxShadow: 3,
  color: 'text1',
  maxHeight: '90vh',
  maxWidth: ['90vw', '90vw', '600px'],
}
