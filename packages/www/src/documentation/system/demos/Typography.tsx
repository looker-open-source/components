/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from 'looker-lens'
import { FontWeights, FontSizes } from 'looker-design-tokens'
import { DocTable } from '../../../Shared'

const specimen =
  'Open Sans is the typographic base for the tone and content of Lens’, Lookers design system'
const typeFamily: Array<{ weight: FontWeights; value: string }> = [
  { weight: 'light', value: '300' },
  { weight: 'normal', value: '400' },
  { weight: 'semiBold', value: '600' },
  { weight: 'bold', value: '700' },
]

const tableRows = typeFamily.map(t => {
  return (
    <TableRow key={t.weight}>
      <TableDataCell>
        <Code>{t.weight}</Code>
      </TableDataCell>
      <TableDataCell>{t.value}</TableDataCell>
      <TableDataCell>
        <Text fontSize="xlarge" fontWeight={t.weight}>
          {specimen}
        </Text>
      </TableDataCell>
    </TableRow>
  )
})

export function FontWeightDemo() {
  return (
    <DocTable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Lens Reference</TableHeaderCell>
          <TableHeaderCell>Weight</TableHeaderCell>
          <TableHeaderCell width="60%">Specimen</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </DocTable>
  )
}

const specimen2 = 'Lens is great'
const typeRamp: Array<{ size: FontSizes; px: string; lh: string }> = [
  { size: 'xxxxlarge', px: '46px', lh: '64px' },
  { size: 'xxxlarge', px: '36px', lh: '52px' },
  { size: 'xxlarge', px: '25px', lh: '40px' },
  { size: 'xlarge', px: '22px', lh: '32px' },
  { size: 'large', px: '18px', lh: '28px' },
  { size: 'medium', px: '16px', lh: '24px' },
  { size: 'small', px: '14px', lh: '20px' },
  { size: 'xsmall', px: '12px', lh: '16px' },
  { size: 'xxsmall', px: '11px', lh: '16px' },
]

const tableRows2 = typeRamp.map(t => {
  return (
    <TableRow key={t.size}>
      <TableDataCell>
        <Text fontSize={t.size}>{specimen2}</Text>
      </TableDataCell>
      <TableDataCell>{t.px}</TableDataCell>
      <TableDataCell>{t.lh}</TableDataCell>
      <TableDataCell>
        <Code>{t.size}</Code>
      </TableDataCell>
    </TableRow>
  )
})

export function TypeScaleDemo() {
  return (
    <DocTable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Specimen</TableHeaderCell>
          <TableHeaderCell>Font Size</TableHeaderCell>
          <TableHeaderCell>Line Height</TableHeaderCell>
          <TableHeaderCell>Lens Reference</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows2}</TableBody>
    </DocTable>
  )
}
