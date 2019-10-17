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
