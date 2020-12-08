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
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@looker/components'
import { FontWeights, FontSizes } from '@looker/design-tokens'
import { DocTable } from '../../../components'

const specimen =
  "Roboto is the typographic base for the tone and content of Looker's design system"
const typeFamily: Array<{ weight: FontWeights; value: string }> = [
  { value: '400', weight: 'normal' },
  { value: '500', weight: 'medium' },
  { value: '600', weight: 'semiBold' },
  { value: '700', weight: 'bold' },
]

const tableRows = typeFamily.map((t) => {
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
          <TableHeaderCell>Reference</TableHeaderCell>
          <TableHeaderCell>Weight</TableHeaderCell>
          <TableHeaderCell width="60%">Specimen</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </DocTable>
  )
}

const specimen2 = 'Looker Components are great'
const typeRamp: Array<{ size: FontSizes; px: string; lh: string }> = [
  { lh: '52px', px: '44px', size: 'xxxxxlarge' },
  { lh: '44px', px: '36px', size: 'xxxxlarge' },
  { lh: '36px', px: '28px', size: 'xxxlarge' },
  { lh: '36px', px: '24px', size: 'xxlarge' },
  { lh: '28px', px: '22px', size: 'xlarge' },
  { lh: '24px', px: '18px', size: 'large' },
  { lh: '24px', px: '16px', size: 'medium' },
  { lh: '20px', px: '14px', size: 'small' },
  { lh: '16px', px: '12px', size: 'xsmall' },
  { lh: '16px', px: '11px', size: 'xxsmall' },
]

const tableRows2 = typeRamp.map((t) => {
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
          <TableHeaderCell>Reference</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows2}</TableBody>
    </DocTable>
  )
}
