/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { TableCellProps } from '../tableCell'
import { tableCellCSS } from '../tableCell'

export interface TableDataCellProps
  extends TableCellProps,
    Omit<CompatibleHTMLProps<HTMLTableDataCellElement>, 'color'> {}

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const TableDataCell = styled.td
  .withConfig({ shouldForwardProp })
  .attrs<TableDataCellProps>(({ borderTop = 'ui2' }) => ({
    borderTop,
  }))<TableDataCellProps>`
  ${tableCellCSS}
`
