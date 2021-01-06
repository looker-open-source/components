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

import { densityTarget } from '@looker/design-tokens'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Spinner } from '../Spinner'
import { Heading } from '../Text'
import { useCallbackRef, useIsTruncated } from '../utils'
import {
  getNumericColumnIndices,
  numericColumnCSS,
} from './utils/dataTableFormatting'
import { DataTableProps } from './types'
import { DataTableHeader } from './Header/DataTableHeader'
import { edgeShadow } from './utils/edgeShadow'

export interface TableProps extends DataTableProps {
  caption: string
  columnsVisible: string[]
}

export const TableLayout: FC<TableProps> = ({
  caption,
  children,
  className,
  columnsVisible,
  headerRowId,
  noResultsDisplay = 'No Results',
  state,
}) => {
  const [element, ref] = useCallbackRef()
  const overflow = useIsTruncated(element, columnsVisible.length)

  const noResultsContent =
    typeof noResultsDisplay === 'string' ? (
      <Heading color="subdued">{noResultsDisplay}</Heading>
    ) : (
      noResultsDisplay
    )

  const interimState = state && (
    <InterimState>
      {state === 'loading' ? <Spinner /> : noResultsContent}
    </InterimState>
  )

  return (
    <>
      <TableScroll ref={ref}>
        <table
          aria-label={caption}
          className={overflow ? `${className} overflow` : className}
        >
          <thead>
            <DataTableHeader id={headerRowId} />
          </thead>
          {!interimState && <tbody>{children}</tbody>}
        </table>
      </TableScroll>
      {interimState}
    </>
  )
}

/**
 * Apply specialized styling to the first column if `select` mode is active
 * (and therefore the first column is the Checkbox for selection)
 */
const selectColumn = css<TableProps>`
  ${({ select }) =>
    select
      ? css`
          &:first-child {
            max-width: ${densityTarget};
            min-width: ${densityTarget};
            width: ${densityTarget};
          }
          &:nth-child(2) {
            padding-left: ${({ theme }) => theme.space.xsmall};
          }
        `
      : css`
          /* stylelint-disable-next-line  */
          &:first-child {
            max-width: 0;
            min-width: 0;
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
    width: 100%;
  }
`

/**
 * Make some columns "sticky" depending on DataTable configuration
 * `select` && `stickyFirstColumn` = two columns stuck
 * `select` OR `stickyFirstColumn` = first column stuck
 * !`select` && !`stickyFirstColumn` = no columns stuck
 *
 * Actions are always stuck if present
 * @TODO - Don't stick last column if DataTable doesn't have actions
 */
const stickyColumns = css<TableProps>`
  ${({ select, firstColumnStuck }) =>
    (select || firstColumnStuck) &&
    css`
      &:first-child {
        left: 0;
        position: sticky;
        ${firstColumnStuck === false && edgeShadow()}
      }
    `}

  ${({ select, firstColumnStuck }) =>
    firstColumnStuck &&
    css`
      &:nth-child(2) {
        left: ${select ? densityTarget : 0};
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

export const Table = styled(TableLayout)`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1;
  width: 100%;

  td,
  th {
    height: ${densityTarget}; /* acts like min-height */
    padding: ${({ theme: { space } }) => `${space.xsmall}  ${space.medium}`};

    :first-child,
    :last-child {
      padding: 0;
    }

    ${selectColumn}
    ${actionsColumn}
  }

  tbody td {
    color: ${({ theme }) => theme.colors.text4};
  }

  &.overflow {
    tr {
      td,
      th {
        ${stickyColumns}
      }
    }
  }

  ${({ columns, columnsVisible }) =>
    numericColumnCSS(getNumericColumnIndices(columns, columnsVisible))}
`

const InterimState = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xlarge};
`

export const TableScroll = styled.div`
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`
