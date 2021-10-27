/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import reduce from 'lodash/reduce'
import has from 'lodash/has'
import {
  Table as TableElement,
  TableHead,
  TableRow,
  TableBody,
  TableHeaderCell,
  TableDataCell,
} from '@looker/components'
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters'
import { TableMeasure } from './TableMeasure'

const getMinMax = (key: string, data: SDKRecord) => {
  return reduce(
    data,
    (minMax, d) => {
      const value = d[key]
      return {
        max: Math.max(minMax.max, value),
        min: Math.min(minMax.min, value),
      }
    },
    { max: 0, min: Infinity }
  )
}

export const Table: FC<TableProps> = ({
  data = [],
  config,
  fields = { dimensions: [], measures: [] },
  width = 'auto',
}) => {
  if (!data.length) {
    return null
  }

  const measureLabels = [...fields.measures].map((f: SDKRecord) => [
    f.name,
    f.view_label,
  ])

  const dimensionLabels = [...fields.dimensions].map((f: SDKRecord) => [
    f.name,
    f.label_short,
  ])

  const fieldLabels = Object.fromEntries([...dimensionLabels, ...measureLabels])

  const cellVis: Record<string, { min: number; max: number }> = reduce(
    get(config, 'series_cell_visualizations', {}),
    (acc, { is_active }, key) => {
      const cell = is_active ? { [key]: getMinMax(key, data) } : {}
      return { ...acc, ...cell }
    },
    {}
  )

  const formattedData = data.map((d: SDKRecord) => {
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(d).map(([key, value]: [string, any]) => {
        const renderCellVis = get(
          config,
          ['series_cell_visualizations', key, 'is_active'],
          false
        )
        /*
         * Return a function which can be executed when table is rendered.
         * This allows a React-safe way for children to be string, number, object, or a React component.
         */
        const formattedValue = renderCellVis
          ? () => (
              <TableMeasure
                value={value}
                min={cellVis[key].min}
                max={cellVis[key].max}
              />
            )
          : value
        return [key, formattedValue]
      })
    )
  })

  const resultKeys = Array.isArray(data)
    ? Object.keys(data[0])
    : Object.keys(data)

  return (
    <TableElement
      width={width === 'auto' ? '100%' : `${width}px`}
      data-testid="table-chart"
    >
      <TableHead>
        <TableRow>
          <TableHeaderCell />
          {resultKeys.map(key => (
            <StyledTableHeaderCell
              key={key}
              width={has(cellVis, key) ? '30%' : 'auto'}
            >
              {fieldLabels[key]}
            </StyledTableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(data) &&
          formattedData.map((obj: SDKRecord, i: number) => {
            return (
              <TableRow key={i}>
                <StyledTableDataCell
                  textAlign="right"
                  color="text1"
                  width="1px"
                  pr="small"
                >
                  {i + 1}
                </StyledTableDataCell>
                {resultKeys.map(key => {
                  const val = obj[key]
                  return (
                    <StyledTableDataCell key={key}>
                      {typeof val === 'function'
                        ? val() // render any embedded react components
                        : Object(val) === val
                        ? JSON.stringify(val)
                        : val}
                    </StyledTableDataCell>
                  )
                })}
              </TableRow>
            )
          })}
      </TableBody>
    </TableElement>
  )
}

const StyledTableHeaderCell = styled(TableHeaderCell)`
  &:first-child {
    max-width: 0;
    min-width: 0;
  }
`

const StyledTableDataCell = styled(TableDataCell)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
