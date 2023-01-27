/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { TableCellProps } from '../tableCell'
import { tableCellCSS } from '../tableCell'

export interface TableHeaderCellProps
  extends TableCellProps,
    CompatibleHTMLProps<HTMLTableHeaderCellElement> {}

export const TableHeaderCell = styled.th
  .withConfig({ shouldForwardProp })
  .attrs<TableHeaderCellProps>(
    ({ color = 'text2', fontSize = 'xsmall', fontWeight = 'semiBold' }) => ({
      color,
      fontSize,
      fontWeight,
    })
  )<TableHeaderCellProps>`
  ${tableCellCSS}
`
