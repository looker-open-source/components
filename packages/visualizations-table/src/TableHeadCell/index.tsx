/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { TableCellStyles, RowIndexStyles } from '../TableCell'
import styled from 'styled-components'

export const TableHeadCell = styled.th.attrs<{ width?: number }>(
  ({ width }) => ({
    width,
  })
)<{ width?: number; stickyLeft?: boolean }>`
  ${TableCellStyles}
  text-align: left;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui4};
  ${({ stickyLeft }) => (stickyLeft ? RowIndexStyles : null)}
`
