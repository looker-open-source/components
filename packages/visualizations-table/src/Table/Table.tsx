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

import type { FC } from 'react'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import get from 'lodash/get'
import reduce from 'lodash/reduce'
import has from 'lodash/has'
import isArray from 'lodash/isArray'

import {
  Table as TableElement,
  TableHead,
  TableRow,
  TableBody,
  TableHeaderCell,
  TableDataCell,
  Truncate,
} from '@looker/components'
import type {
  MeasureMetadata,
  SDKRecord,
  TableProps,
} from '@looker/visualizations-adapters'
import { TableMeasure } from './TableMeasure'
import numeral from 'numeral'

const getMinMax = (key: string | number, data: SDKRecord) => {
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
  totals = {},
  width = 'auto',
}) => {
  const theme = useContext(ThemeContext)
  if (!data.length) {
    return null
  }
  const truncateText = config.truncate_text
  const fieldLabels = Object.fromEntries(
    [...fields.measures, ...fields.dimensions].map((f, i) => {
      const series = isArray(config.series)
        ? get(config, ['series', i])
        : get(config, ['series', f.name])
      const label =
        series?.label || (f as MeasureMetadata).pivoted_label || f.label_short
      return [f.name, label]
    })
  )

  const cellVis: Record<string, { min: number; max: number }> = reduce(
    get(config, 'series', {}),
    (acc, { cell_visualization }, key) => {
      const measureName = Number.isInteger(key)
        ? fields.measures[parseInt(key)]?.name
        : key
      const cell = cell_visualization
        ? { [measureName]: getMinMax(measureName, data) }
        : {}
      return { ...acc, ...cell }
    },
    {}
  )

  const formattedData = data.map((d: SDKRecord) => {
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(d).map(([key, value]: [string, any]) => {
        const matchingMeasureIndex = fields.measures.findIndex(
          measure => measure.name === key
        )

        const valueFormat = isArray(config.series)
          ? get(config, ['series', matchingMeasureIndex, 'value_format'])
          : get(config, ['series', key, 'value_format'])

        const valueFormatted = valueFormat
          ? numeral(value).format(valueFormat)
          : value

        const cellVisEntry = cellVis[key]
        const formattedValue = cellVisEntry
          ? () => (
              <TableMeasure
                value={valueFormatted}
                min={cellVisEntry.min}
                max={cellVisEntry.max}
              />
            )
          : valueFormatted
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
              <StyledTableRow
                key={i}
                backgroundColor={
                  i % 2 ? theme.colors.ui1 : theme.colors.background
                }
              >
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
                  let valHelper = val
                  if (typeof val === 'function') {
                    valHelper = val() // render any embedded react components
                  } else if (Object(val) === val) {
                    valHelper = JSON.stringify(val)
                  }
                  return (
                    <StyledTableDataCell key={key}>
                      {truncateText ? (
                        <Truncate>{valHelper}</Truncate>
                      ) : (
                        valHelper
                      )}
                    </StyledTableDataCell>
                  )
                })}
              </StyledTableRow>
            )
          })}
        {Object.keys(totals).length > 0 && (
          <TableRow>
            <StyledTableDataCell
              textAlign="right"
              color="text1"
              width="1px"
              pr="small"
            >
              Totals
            </StyledTableDataCell>
            {resultKeys.map(key => {
              const val = totals[key]
              return <StyledTableDataCell key={key}>{val}</StyledTableDataCell>
            })}
          </TableRow>
        )}
      </TableBody>
    </TableElement>
  )
}

const StyledTableHeaderCell = styled(TableHeaderCell)`
  &:first-child {
    max-width: 0;
    min-width: 0;
  }
  padding: ${({ theme }) => theme.space.xsmall};
`

const StyledTableRow = styled(TableRow)<{
  backgroundColor: string
}>`
  background: ${({ backgroundColor }) => backgroundColor};
`
const StyledTableDataCell = styled(TableDataCell)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  max-width: 500px;
  overflow-wrap: break-word;
  position: relative;
  ${Truncate} {
    left: 0;
    padding: ${({ theme }) => theme.space.xsmall};
    position: absolute;
    top: 0;
  }
`
