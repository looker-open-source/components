/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FC, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import {
  getNumericColumnIndices,
  numericColumnCSS,
} from './utils/actionListFormatting'
import { ActionListProps } from './ActionList'
import { generateActionListHeader } from './Header'
import { edgeShadow } from './utils/edgeShadow'

export interface ActionListTableProps extends ActionListProps {
  renderedWidth: string
  visibleColumns: string[]
}

export const ActionListTableLayout: FC<ActionListTableProps> = ({
  children,
  className,
  columns,
  headerRowId,
  renderedWidth,
}) => {
  const internalRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    const container = internalRef.current

    if (container) {
      setOverflow(container.offsetWidth < container.scrollWidth)
    }
  }, [renderedWidth])

  return (
    <TableScroll ref={internalRef}>
      <table className={overflow ? `${className} overflow` : className}>
        <thead>{generateActionListHeader(columns, headerRowId)}</thead>
        <tbody>{children}</tbody>
      </table>
    </TableScroll>
  )
}

export const densityTarget = '2.25rem' // 36px

/**
 * Apply specialized styling to the first column if `select` mode is active
 * (and therefore the first column is the Checkbox for selection)
 */
const selectColumn = css<ActionListTableProps>`
  ${({ select }) =>
    select &&
    css`
      &:first-child {
        max-width: ${densityTarget};
        min-width: ${densityTarget};
        padding: 0;
        width: ${densityTarget};
      }
      &:nth-child(2) {
        padding-left: ${({ theme }) => theme.space.xsmall};
      }
    `}
`

/**
 * Apply specialized styling to the last column where actions are presented.
 * NOTE: If the row does not include actions the column is still rendered.
 *
 * `width: 100%` is specified on this column ensures that the other columns
 * only consume the space needed to meet their specified size or min-content.
 */
const actionsColumn = css`
  &:last-child {
    padding: 0;
    text-align: right;
    width: 100%;
  }
`

/**
 * Make some columns "sticky" depending on ActionList configuration
 * `select` && `stickyFirstColumn` = two columns stuck
 * `select` OR `stickyFirstColumn` = first column stuck
 * !`select` && !`stickyFirstColumn` = no columns stuck
 *
 * Actions are always stuck if present
 * @TODO - Don't stick last column if DataTable doesn't have actions
 */
const stickyColumns = css<ActionListTableProps>`
  ${({ select, firstColumnStuck }) =>
    (select || firstColumnStuck) &&
    css`
      &:first-child {
        left: 0;
        position: sticky;
        ${(!select || firstColumnStuck === false) && edgeShadow()}
      }
    `}

  ${({ select, firstColumnStuck }) =>
    select &&
    firstColumnStuck &&
    css`
      &:nth-child(2) {
        left: ${densityTarget};
        position: sticky;
        ${edgeShadow()}
      }
    `}

  &:last-child {
    ${edgeShadow('right')}
    position: sticky;
    right: 0;
  }
`

export const ActionListTable = styled(ActionListTableLayout)`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1;
  width: 100%;

  td,
  th {
    height: ${densityTarget}; /* acts like min-height */
    padding: ${({ theme: { space } }) => `${space.xsmall}  ${space.medium}`};
  }

  tbody td {
    color: ${({ theme }) => theme.colors.text4};
  }

  tr {
    td,
    th {
      ${selectColumn}
      ${actionsColumn}
    }
  }

  &.overflow {
    tr {
      td,
      th {
        ${stickyColumns}
      }
    }
  }

  ${({ columns, select, visibleColumns }) =>
    numericColumnCSS(
      getNumericColumnIndices(columns, visibleColumns, Boolean(select))
    )}
`

export const TableScroll = styled.div`
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`
