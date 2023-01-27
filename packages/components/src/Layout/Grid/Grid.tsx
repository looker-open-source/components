/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { SpaceHelperProps } from '../Space'
import { defaultGap } from '../Space'
import { commonLayoutCSS } from '../utils/common'

export interface GridProps extends SpaceHelperProps {
  /**
   * Number of columns to display
   * @default 2
   */
  columns?: number
}

/**
 * Grid provides a simple implementation of the CSS Grid.
 *
 * By default `Grid` has two columns with a "medium" `gap` between grid cells and "100%" `width`
 */
export const Grid = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<GridProps>(({ width = '100%' }) => ({ width }))<GridProps>`
  ${commonLayoutCSS}

  display: grid;
  grid-gap: ${({ gap, theme }) => theme.space[gap || defaultGap]};
  grid-template-columns:
    repeat(${({ columns }) => columns || 2}, minmax(0, 1fr));
`
