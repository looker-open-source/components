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

import React from 'react'
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

const spacingExamples = [
  { label: 'xxsmall', px: '4', rem: '0.25rem' },
  { label: 'xsmall', px: '8', rem: '0.5rem' },
  { label: 'small', px: '12', rem: '0.75rem' },
  { label: 'medium', px: '16', rem: '1rem' },
  { label: 'large', px: '20', rem: '1.25rem' },
  { label: 'xlarge', px: '32', rem: '2rem' },
  { label: 'xxlarge', px: '40', rem: '2.5rem' },
  { label: 'xxxlarge', px: '60', rem: '3.75rem' },
  { label: 'xxxxlarge', px: '80', rem: '5rem' },
]

const spacingLabels = ['Size', 'PX Value', 'Rem Value', 'Reference']

export interface SpaceExample {
  label: string
  px: string
  rem: string
}

const TableLabel = (label: string, key: number) => {
  return (
    <TableHeaderCell key={key}>
      <Text fontSize="medium" fontWeight="semiBold">
        {label}
      </Text>
    </TableHeaderCell>
  )
}

const SpacingRow = (px: string, rem: string, key: number, label: string) => {
  const divStyle = {
    background: '#FD5AC9',
    height: `${px}px`,
    opacity: 0.5,
    width: `${px}px`,
  }

  return (
    <TableRow key={key} style={{ verticalAlign: 'middle' }}>
      <TableDataCell>
        <div style={divStyle} />
      </TableDataCell>
      <TableDataCell>{px}px</TableDataCell>
      <TableDataCell>{rem}</TableDataCell>
      <TableDataCell>
        <Code>{label}</Code>
      </TableDataCell>
    </TableRow>
  )
}

export const SpacingOptionsTable = () => (
  <DocTable>
    <TableHead>
      <TableRow>
        {spacingLabels.map((label, i) => {
          return TableLabel(label, i)
        })}
      </TableRow>
    </TableHead>
    <TableBody>
      {spacingExamples.map((space, i) => {
        return SpacingRow(space.px, space.rem, i, space.label)
      })}
    </TableBody>
  </DocTable>
)
