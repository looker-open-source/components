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
import React from 'react'
import styled from 'styled-components'
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeaderCell,
  TableDataCell,
} from '@looker/components'
import type { VisWrapperProps } from '../VisWrapper'
import type { SDKRecord, Fields, ChartLayoutProps } from '../types'
import type { CTable } from '../adapters'

export interface TableProps extends VisWrapperProps, ChartLayoutProps {
  data: SDKRecord[]
  config?: CTable
  fields?: Fields
}

export const StaticTable: FC<TableProps> = ({
  data = [],
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

  const formattedData = data.map((d: SDKRecord) => {
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(d).map(([key, value]: [string, any]) => {
        return [key, value]
      })
    )
  })

  const resultKeys = Array.isArray(data)
    ? Object.keys(data[0])
    : Object.keys(data)

  return (
    <Table
      width={width === 'auto' ? '100%' : `${width}px`}
      data-testid="table-chart"
    >
      <TableHead>
        <TableRow>
          <TableHeaderCell />
          {resultKeys.map((key) => (
            <StyledTableHeaderCell key={key} width="auto">
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
                <TableDataCell
                  textAlign="right"
                  color="text1"
                  width="1px"
                  pr="small"
                >
                  {i + 1}
                </TableDataCell>
                {resultKeys.map((key) => {
                  const val = obj[key]
                  let valHelper = val
                  if (typeof val === 'function') {
                    valHelper = val() // render any embedded react components
                  } else if (Object(val) === val) {
                    valHelper = JSON.stringify(val)
                  }
                  return <TableDataCell key={key}>{valHelper}</TableDataCell>
                })}
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}

const StyledTableHeaderCell = styled(TableHeaderCell)`
  &:first-child {
    max-width: 0;
    min-width: 0;
  }
`
