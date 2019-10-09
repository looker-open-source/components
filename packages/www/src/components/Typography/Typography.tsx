import React from 'react'
import {
  Box,
  Code,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@looker/components'
import { FontWeights, FontSizes } from '@looker/design-tokens'

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
        <Box px="small" as="span" className="prop-code">
          <Code fontSize="xsmall">{t.weight}</Code>
        </Box>
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
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>
            <Text fontSize="small" fontWeight="semiBold" variant="subdued">
              LENS REFERENCE
            </Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text fontSize="small" fontWeight="semiBold" variant="subdued">
              WEIGHT
            </Text>
          </TableHeaderCell>
          <TableHeaderCell width="60%">
            <Text fontSize="small" fontWeight="semiBold" variant="subdued">
              SPECIMEN
            </Text>
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
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
        <Box px="small" as="span" className="prop-code">
          <Code fontSize="xsmall">{t.size}</Code>
        </Box>
      </TableDataCell>
    </TableRow>
  )
})

export function TypeScaleDemo() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>
            <Text fontSize="xsmall" fontWeight="semiBold" variant="subdued">
              SPECIMEN
            </Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text fontSize="xsmall" fontWeight="semiBold" variant="subdued">
              FONT-SIZE
            </Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text fontSize="xsmall" fontWeight="semiBold" variant="subdued">
              LINE-HEIGHT
            </Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text fontSize="xsmall" fontWeight="semiBold" variant="subdued">
              LENS REFERENCE
            </Text>
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows2}</TableBody>
    </Table>
  )
}
