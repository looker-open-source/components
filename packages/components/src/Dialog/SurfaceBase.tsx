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
import React, { FC, useContext, useEffect, useRef } from 'react'
import styled, { CSSObject, css } from 'styled-components'
import { LayoutProps, layout } from 'styled-system'
import { useGlobalHotkeys } from '../utils'
import { DialogContext } from './DialogContext'

export interface SurfaceProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    LayoutProps {
  surfaceStyles?: CSSObject
  animationState?: string
}

const SurfaceLayout: FC<SurfaceProps> = ({
  surfaceStyles,
  className,
  ...props
}) => {
  const { closeModal, enableFocusTrap } = useContext(DialogContext)

  const wrapperRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      enableFocusTrap && enableFocusTrap()
    }, theme.transitions.moderate)
    return () => clearTimeout(t)
  }, [enableFocusTrap])

  useGlobalHotkeys('esc', closeModal, wrapperRef)

  return (
    <div
      className={`surface-overflow ${className}`}
      style={surfaceStyles as CSSObject}
      ref={wrapperRef}
      {...omitStyledProps(props)}
    />
  )
}

export const surfaceTransition = () => css`
  ${({ theme }) => `${theme.transitions.moderate}ms ${theme.easings.ease}`}
`

export const SurfaceBase = styled(SurfaceLayout).attrs(() => ({
  'aria-modal': true,
  role: 'dialog',
}))`
  ${reset}
  ${layout}

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;
  }
`
