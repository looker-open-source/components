/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'
import type {
  CompatibleHTMLProps,
  SizeProps,
  SpaceProps,
} from '@looker/design-tokens'
import { reset, size, space, shouldForwardProp } from '@looker/design-tokens'

export interface SwatchProps
  extends SizeProps,
    SpaceProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string
}

const emptySwatch = css`
  position: relative;
  &::after {
    /* stylelint-disable-next-line */
    background: red;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    width: 100%;
  }
`

export const Swatch = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<SwatchProps>(({ color = 'transparent', size = 'xsmall' }) => ({
    color,
    'data-testid': 'swatch',
    size,
  }))<SwatchProps>`
   ${reset}
 
   ${size}
   ${space}
   background-color: ${({ color }) => color};
   border: 1px solid ${({ theme: { colors } }) => colors.ui3};
   border-radius: 50%;
   cursor: ${({ disabled }) => !disabled && 'pointer'};
 
   ${({ color }) => color === 'transparent' && emptySwatch}
 
   &:hover {
     border: 1px solid ${({ theme: { colors } }) => colors.ui4};
   }
 `
