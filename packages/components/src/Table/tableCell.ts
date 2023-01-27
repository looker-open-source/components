/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  SpaceProps,
} from '@looker/design-tokens'
import {
  reset,
  border,
  color,
  layout,
  typography,
  space,
} from '@looker/design-tokens'
import { css } from 'styled-components'

export interface TableCellProps
  extends BorderProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTableCellElement> {}

export const tableCellCSS = css`
  ${reset}
  padding: ${({ theme }) => theme.space.u2} 0;
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
`
