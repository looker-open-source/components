/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  SpaceProps,
  BorderProps,
  LayoutProps,
} from '@looker/design-tokens'
import {
  reset,
  space,
  border,
  layout,
  shouldForwardProp,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface TableProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    CompatibleHTMLProps<HTMLTableElement> {}

export const Table = styled.table
  .withConfig({ shouldForwardProp })
  .attrs<TableProps>(({ width = '100%' }) => ({
    width,
  }))<TableProps>`
  ${reset}
  ${space}
  ${layout}
  ${border}
  border-collapse: collapse;
  color: ${({ theme: { colors } }) => colors.text5};
`
