/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { theme } from '@looker/design-tokens'
import styled, { css } from 'styled-components'

export const HANDLE_SIZE = theme.sizes.small

export const handleCSS = css<HandleProps>`
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.elevations.plus1};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'pointer')};
  height: ${HANDLE_SIZE};
  left: 0;
  position: relative;
  width: ${HANDLE_SIZE};
`

export interface HandleProps {
  color: string
  isMouseDown: boolean
  x: number
}

export const Handle = styled.div.attrs<HandleProps>(({ color, x }) => ({
  style: {
    background: color,
    // Horizontally centers handle on click position
    transform: `translateX(calc(${x}px - ${HANDLE_SIZE} / 2))`,
  },
}))<HandleProps>`
  ${handleCSS}

  /* Vertically centers slider */
  top: ${({ theme }) => `calc(${theme.space.u3} / 2 - ${HANDLE_SIZE} / 2)`};
`
