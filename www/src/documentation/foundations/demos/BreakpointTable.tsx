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

import React, { Component } from 'react'
import {
  Code,
  Text,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@looker/components'
import { DocTable } from '../../../components'

const breakpointLabels = [
  'Breakpoint',
  'Starts At',
  'Definition',
  'Description',
]

const breakpointList = [
  {
    description: 'Smaller screens like phones',
    rem: '30rem',
    slot: 0,
    starts: '480px',
  },
  {
    description: 'Medium sized screens like tablets',
    rem: '48rem',
    slot: 1,
    starts: '768px',
  },
  {
    description: 'Large screens like laptops',
    rem: '64rem',

    slot: 2,
    starts: '1024px',
  },
  {
    description: 'Larger screens like a desktop monitor',
    rem: '75rem',
    slot: 3,
    starts: '1200px',
  },
  { description: 'Wider screens', rem: '90rem', slot: 4, starts: '1440px' },
]

export interface BreakpointExample {
  slot: number
  starts: string
  rem: string
  description: string
}

const TableLabel = (label: string, key: number) => {
  return (
    <TableHeaderCell key={key}>
      <Text fontSize="small" fontWeight="semiBold">
        {label}
      </Text>
    </TableHeaderCell>
  )
}

const BreakpointRow = (
  slot: number,
  starts: string,
  rem: string,
  description: string,
  key: number
) => {
  return (
    <TableRow key={key} style={{ verticalAlign: 'middle' }}>
      <TableDataCell>{slot}</TableDataCell>
      <TableDataCell>{starts}</TableDataCell>
      <TableDataCell>
        <Code>min-width: {rem}</Code>
      </TableDataCell>
      <TableDataCell>{description}</TableDataCell>
    </TableRow>
  )
}

export class BreakpointTable extends Component<
  {},
  {
    breakpoints: BreakpointExample[]
    labels: string[]
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      breakpoints: breakpointList,
      labels: breakpointLabels,
    }
  }

  public render() {
    return (
      <DocTable>
        <TableHead>
          <TableRow>
            {this.state.labels.map((label, i) => {
              return TableLabel(label, i)
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.breakpoints.map((bp, i) => {
            return BreakpointRow(bp.slot, bp.starts, bp.rem, bp.description, i)
          })}
        </TableBody>
      </DocTable>
    )
  }
}
