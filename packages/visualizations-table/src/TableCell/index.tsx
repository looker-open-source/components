/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import styled, { css } from 'styled-components'

export const RowIndexStyles = css`
  border-right: 1px solid ${({ theme }) => theme.colors.ui4};
  text-align: right;
  position: sticky;
  left: 0;
  z-index: 1;
`

export const TableCellStyles = css`
  border-right: 1px solid ${({ theme }) => theme.colors.ui2};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.small};
  padding: ${({ theme }) =>
    css`
      ${theme.space.xxsmall} ${theme.space.xsmall}
    `};
  &:last-child {
    border-right: none;
  }
`

export const TableCell = styled.td<{ stickyLeft?: boolean }>`
  ${TableCellStyles}
  ${({ stickyLeft }) => (stickyLeft ? RowIndexStyles : null)}
`
