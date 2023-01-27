/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React, { useRef } from 'react'
import type { FC } from 'react'
import type { TableProps, CTableSeries } from '@looker/visualizations-adapters'
import {
  getSeriesMax,
  getSeriesMin,
  DEFAULT_HEIGHT,
  DEFAULT_EMPTY_FIELDS,
} from '@looker/visualizations-adapters'
import { flexRender } from '@tanstack/react-table'
import styled, { css } from 'styled-components'
import { IconButton, Truncate, Box, Grid } from '@looker/components'
import { useHeadlessTable, useVirtual } from '../hooks'
import { useTranslation, getSortAssets, normalizeHeaderColumns } from '../utils'
import { CellVisualization } from '../CellVisualization'
import { ColumnTotals } from '../ColumnTotals'
import { TableCell } from '../TableCell'
import { TableHeadCell } from '../TableHeadCell'

import numeral from 'numeral'
import get from 'lodash/get'

export const Table = ({
  config = { column_order: [], show_row_numbers: true, type: 'table' },
  data = [],
  fields = DEFAULT_EMPTY_FIELDS,
  height = DEFAULT_HEIGHT,
  pivots,
  width,
  totals,
  defaultRowHeight,
}: TableProps) => {
  const { t } = useTranslation('Table')

  const scrollContainer = useRef<HTMLDivElement>(null)

  const { table, sorting, handleTableSort } = useHeadlessTable({
    data,
    config,
    fields,
    pivots,
  })

  const tableRows = table.getRowModel().rows

  const dataToVirtualize = tableRows.map(row => row.getVisibleCells())

  const virtualizerAssets = useVirtual({
    data: dataToVirtualize,
    scrollContainer,
    defaultRowHeight,
  })

  const {
    virtualRows,
    virtualColumns,
    OffsetTop,
    OffsetBottom,
    OffsetLeft,
    OffsetRight,
  } = virtualizerAssets

  const {
    series = {},
    show_row_numbers,
    truncate_text,
    truncate_header,
  } = config

  const seriesMinMax = Object.fromEntries(
    fields.measures.map(({ name }) => {
      const min = getSeriesMin(name, data)
      const max = getSeriesMax(name, data)
      return [name, { min, max }]
    })
  )

  const headerGroups = normalizeHeaderColumns(table)

  const rowNumWidth = String(data.length).length * 10

  return (
    <ScrollWrapper width={width} height={height} ref={scrollContainer}>
      <TableElement cellSpacing="0">
        <THead>
          {headerGroups.map((headerGroup, i) => {
            return (
              <tr key={`theadRow${i}`}>
                <OffsetLeft as="th" />

                {show_row_numbers ? (
                  <TableHeadCell stickyLeft>
                    <PlaceholderElement width={rowNumWidth} />
                  </TableHeadCell>
                ) : undefined}

                {virtualColumns.map(
                  ({ index: columnIndex, measureElement, size }) => {
                    const header = headerGroup.headers[columnIndex]

                    if (header) {
                      const { header: headerContent } = header.column.columnDef

                      const columnSortState = sorting.find(
                        s => s.id === header.id
                      )

                      const { SortIcon, sortText, ariaSort } = getSortAssets(
                        t,
                        columnSortState
                      )

                      return (
                        <TableHeadCell
                          key={header.id}
                          colSpan={header.colSpan}
                          aria-sort={ariaSort}
                        >
                          <TableHeadLayout
                            sortButtonDefaultVisible={!!columnSortState}
                            ref={measureElement}
                            width={size}
                          >
                            <HeaderContentWrapper
                              truncateHeader={!!truncate_header}
                              data-testid="columnheader-label"
                            >
                              {flexRender(headerContent, header.getContext())}
                            </HeaderContentWrapper>
                            {i === headerGroups.length - 1 && (
                              /* only render sort button in last header row */
                              <IconButton
                                icon={<SortIcon />}
                                label={sortText}
                                outline
                                shape="square"
                                size="xxsmall"
                                onClick={e => handleTableSort(header, e)}
                              />
                            )}
                          </TableHeadLayout>
                        </TableHeadCell>
                      )
                    } else {
                      return null
                    }
                  }
                )}

                <OffsetRight as="th" />
              </tr>
            )
          })}
        </THead>
        <TBody>
          <OffsetTop />
          {virtualRows.map(({ index: rowIndex, measureElement, size }) => {
            const tableRow = tableRows[rowIndex]

            return (
              <TableRow key={tableRow.id} ref={measureElement} height={size}>
                <OffsetLeft />

                {show_row_numbers ? (
                  <TableCell stickyLeft>{rowIndex + 1}</TableCell>
                ) : undefined}

                {virtualColumns.map(({ index: columnIndex }) => {
                  const { column, getContext, ...cell } =
                    dataToVirtualize[rowIndex][columnIndex]

                  const measureIndex = fields.measures.findIndex(
                    m => m.name === column.id
                  )
                  const columnConfig: CTableSeries = Array.isArray(series)
                    ? series[measureIndex]
                    : series[column.id]

                  const { cell: cellContent } = column.columnDef

                  const { max, min } = seriesMinMax?.[column.id] || {
                    max: Infinity,
                    min: 0,
                  }

                  const valueFormat = Array.isArray(series)
                    ? get(series, [measureIndex, 'value_format'])
                    : get(series, [column.id, 'value_format'])

                  const CellValue = cell.getValue()

                  return (
                    <TableCell key={cell.id}>
                      {typeof CellValue === 'function' ? (
                        <CellValue />
                      ) : (
                        <CellContentLayout>
                          {columnConfig?.cell_visualization ? (
                            <CellVisualization
                              color={columnConfig.color}
                              min={min}
                              max={max}
                              value={Number(cell.getValue())}
                            />
                          ) : null}
                          <CellContentWrapper truncateText={!!truncate_text}>
                            {valueFormat
                              ? numeral(Number(cell.getValue())).format(
                                  valueFormat
                                )
                              : flexRender(cellContent, getContext())}
                          </CellContentWrapper>
                        </CellContentLayout>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
          <OffsetBottom />
        </TBody>
        <TFoot>
          <ColumnTotals
            totals={totals}
            config={config}
            fields={fields}
            virtualizerAssets={virtualizerAssets}
            table={table}
          />
        </TFoot>
      </TableElement>
    </ScrollWrapper>
  )
}

/**
 * Truncate table body content when truncateText is true
 */
const CellContentWrapper: FC<{ truncateText: boolean }> = ({
  children,
  truncateText,
}) =>
  truncateText ? (
    <Grid columns={1} width="auto">
      <Truncate>{children}</Truncate>
    </Grid>
  ) : (
    <>{children}</>
  )

/**
 * Truncate header text when truncateHeader is true
 */
const HeaderContentWrapper: FC<{ truncateHeader: boolean }> = ({
  truncateHeader,
  ...props
}) => (truncateHeader ? <Truncate {...props} /> : <Box {...props} />)

const PlaceholderElement = styled.div.attrs<{ width?: number }>(
  ({ width }) => ({ style: { minWidth: width } })
)<{ width?: number }>``

const ScrollWrapper = styled.div<{ width?: number; height: number }>`
  max-height: ${({ height }) => `${height}px`};
  overflow: auto;
  max-width: ${({ width }) => (width ? `${width}px` : `100%`)};
  position: relative;
`

const TableElement = styled.table`
  width: 100%;
  color: ${({ theme }) => theme.colors.text5};
  font-family: ${({ theme }) => theme.fonts.body};
`

const THead = styled.thead`
  top: 0;
  position: sticky;
  z-index: 1;
`

const TFoot = styled.tfoot`
  position: sticky;
  bottom: 0px;
`

const TBody = styled.tbody`
  position: relative;
  z-index: 0;
`

const TableRow = styled.tr.attrs<{ height?: number }>(({ height }) => ({
  height,
}))<{ height?: number }>`
  :nth-child(even) {
    ${TableCell} {
      background-color: ${({ theme }) => theme.colors.ui1};
    }
  }
  :nth-child(odd) {
    ${TableCell} {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`

const CellContentLayout = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.space.xxsmall};
`

const TableHeadLayout = styled.div.attrs<{ width?: number }>(({ width }) => ({
  style: { minWidth: width },
}))<{ width?: number; sortButtonDefaultVisible?: boolean }>`
  display: grid;
  grid-template-columns: minMax(${({ theme }) => theme.space.u16}, 1fr) auto;
  grid-gap: ${({ theme }) => theme.space.xxsmall};
  ${IconButton} {
    ${({ sortButtonDefaultVisible }) =>
      sortButtonDefaultVisible
        ? css`
            visibility: visible;
          `
        : css`
            visibility: hidden;
          `}
  }
  &:hover {
    ${IconButton} {
      visibility: visible;
    }
  }
`
