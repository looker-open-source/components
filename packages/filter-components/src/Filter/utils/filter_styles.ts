/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'

export const multiInputWidth = 280

export interface PlacementProps {
  /**
   * Placement in a group of adjacent inputs
   */
  placement?: 'left' | 'middle' | 'right'
}

const flatBorderRight = css`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  &:not(:focus-within) {
    border-right-color: transparent;
  }
`

const flatBorderLeft = css`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`

export const inputPlacementStyle = ({ placement }: PlacementProps) => {
  switch (placement) {
    case 'left':
      return `
      ${flatBorderRight}
    `
    case 'right':
      return `
      ${flatBorderLeft}
    `
    case 'middle':
      return `
      ${flatBorderLeft}
      ${flatBorderRight}
    `
    default:
      return ''
  }
}

export interface TokenStyleProps {
  tokenStyle?: boolean
}

export const tokenStylePlaceholder = (props: TokenStyleProps) =>
  props.tokenStyle
    ? css`
        input::placeholder {
          color: ${({ theme }) => theme.colors.text3};
        }
      `
    : ''
