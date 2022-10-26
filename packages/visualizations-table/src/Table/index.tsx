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
import { useTranslation, getSortAssets } from '../utils'
import { CellVisualization } from '../CellVisualization'
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

  const { virtualRows, OffsetTop, OffsetBottom } = useVirtual({
    data,
    scrollContainer,
    defaultRowHeight,
  })

  const { table, sorting, handleTableSort } = useHeadlessTable({
    data,
    config,
    fields,
    pivots,
  })

  const tableRows = table.getRowModel().rows

  const {
    series = {},
    show_row_numbers,
    truncate_text,
    truncate_header,
    show_totals = false,
  } = config

  const seriesMinMax = Object.fromEntries(
    fields.measures.map(({ name }) => {
      const min = getSeriesMin(name, data)
      const max = getSeriesMax(name, data)
      return [name, { min, max }]
    })
  )

  const headerGroups = table.getHeaderGroups()

  const rowNumWidth = String(data.length).length * 14
  return (
    <ScrollWrapper width={width} height={height} ref={scrollContainer}>
      <TableElement cellSpacing="0">
        <THead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={`theadRow${i}`}>
              {show_row_numbers ? (
                <TableHeadCell width={rowNumWidth}></TableHeadCell>
              ) : undefined}
              {headerGroup.headers.map(header => {
                const { header: headerContent } = header.column.columnDef

                const columnSortState = sorting.find(s => s.id === header.id)

                const { SortIcon, sortText, ariaSort } = getSortAssets(
                  t,
                  columnSortState
                )

                return (
                  <TableHeadCell
                    key={header.id}
                    colSpan={header.colSpan}
                    aria-sort={ariaSort}
                    width={header.column.getSize()}
                  >
                    <TableHeadLayout
                      sortButtonDefaultVisible={!!columnSortState}
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
              })}
            </tr>
          ))}
        </THead>
        <tbody>
          <OffsetTop />
          {virtualRows.map(({ index, measureElement }) => {
            const tableRow = tableRows[index]
            return (
              <TableRow key={tableRow.id}>
                {show_row_numbers ? <RowNum>{index + 1}</RowNum> : undefined}
                {tableRow
                  ?.getVisibleCells?.()
                  .map(({ column, getContext, ...cell }) => {
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
                      <TableCell
                        key={cell.id}
                        ref={measureElement}
                        width={column.getSize()}
                      >
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
        </tbody>
        <TFoot>
          {show_totals && totals
            ? table.getHeaderGroups().map((headerGroup, i) => (
                <tr key={`tfootRow${i}`}>
                  {headerGroup.headers.map((header, index) => {
                    const totalsText = t('Totals')

                    const measureIndex = fields.measures.findIndex(
                      m => m.name === header.id
                    )

                    const valueFormat = Array.isArray(series)
                      ? get(series, [measureIndex, 'value_format'])
                      : get(series, [header.id, 'value_format'])

                    if (index === 0) {
                      return (
                        <TableHeadCell
                          key={`${header.id || null}-foot`}
                          colSpan={show_row_numbers ? 2 : 1}
                        >
                          {totalsText}
                        </TableHeadCell>
                      )
                    } else {
                      return (
                        <TableHeadCell key={`${header.id || null}-foot`}>
                          {valueFormat
                            ? numeral(Number(totals[header.id])).format(
                                valueFormat
                              )
                            : totals[header.id] || null}
                        </TableHeadCell>
                      )
                    }
                  })}
                </tr>
              ))
            : null}
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
`

const TFoot = styled.tfoot`
  position: sticky;
  bottom: 0px;
`

const TableCellStyles = css<{ width?: number }>`
  border-right: 1px solid ${({ theme }) => theme.colors.ui2};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.small};
  padding: ${({ theme }) =>
    css`
      ${theme.space.xxsmall} ${theme.space.xsmall}
    `};
  width: ${({ width }) => width}px;
  &:last-child {
    border-right: none;
  }
`

const TableCell = styled.td<{ width?: number }>`
  ${TableCellStyles}
`

const RowNum = styled(TableCell)`
  border-right: 1px solid ${({ theme }) => theme.colors.ui4};
  text-align: right;
  width: 1rem;
`

const TableHeadCell = styled.th<{ width?: number }>`
  ${TableCellStyles}
  text-align: left;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui4};
`

const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.ui1};
  }
`

const CellContentLayout = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.space.xxsmall};
`

const TableHeadLayout = styled.div<{ sortButtonDefaultVisible: boolean }>`
  display: grid;
  grid-template-columns: minMax(${({ theme }) => theme.space.u16}, 1fr) auto;
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
