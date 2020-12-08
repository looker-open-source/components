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

import styled, { css } from 'styled-components'
import {
  OverlaySurface,
  OverlaySurfaceContentArea,
  OverlaySurfaceProps,
} from '../Overlay/OverlaySurface'
import { Link } from '../Link'

interface TooltipSurfaceProps extends OverlaySurfaceProps {
  /**
   * Invert the Tooltip surface colors
   * @default true
   */
  invert?: boolean
}

export const invertSurface = (props: TooltipSurfaceProps) =>
  props.invert !== false &&
  css`
    ${OverlaySurfaceContentArea} {
      background: ${({ theme }) => theme.colors.inverse};
      border-color: ${({ theme }) => theme.colors.inverse};
      color: ${({ theme }) => theme.colors.inverseOn};
    }

    ${Link} {
      color: ${({ theme }) => theme.colors.keyAccent};

      &:focus,
      &:hover,
      &:active,
      &.active,
      &:visited {
        color: ${({ theme }) => theme.colors.keySubtle};
      }
    }
  `

export const TooltipSurface = styled(OverlaySurface)<TooltipSurfaceProps>`
  ${invertSurface}

  &.exited,
  &.exiting,
  &.entering {
    animation: none;
    opacity: 0;
    /* Prevents showing the tooltip if the the mouse happens to move over it
    when still opacity: 0 (during the delay) */
    pointer-events: none;
  }
`
