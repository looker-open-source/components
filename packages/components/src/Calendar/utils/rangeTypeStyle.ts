/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import type { RangeProps } from '../types'

export const rangeTypeStyle = ({ rangePosition, rangeType }: RangeProps) => {
  if (rangeType === 'none' || !rangePosition) return ''
  if (rangeType === 'selected') {
    return css`
      background: ${({ theme }) => theme.colors.keyAccent};
    `
  }
  return css`
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.ui4} 60%,
        transparent 40%
      ),
      linear-gradient(
        to right,
        ${({ theme }) => theme.colors.ui4} 60%,
        transparent 40%
      );
    background-position: left top, left bottom;
    background-repeat: repeat-x, repeat-x;
    background-size: 4px 1px, 4px 1px;
  `
}
