import * as React from 'react'
import { Box } from '../src/components/Box/Box'
import { Code } from '../src/components/Text/Code'
import { Text } from '../src/components/Text/Text'

import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../src/components/Table/'

const spacingExamples = [
  { label: 'xsmall', px: '4', rem: '0.25rem' },
  { label: 'small', px: '8', rem: '0.5rem' },
  { label: 'medium', px: '16', rem: '1rem' },
  { label: 'large', px: '20', rem: '1.25rem' },
  { label: 'xlarge', px: '32', rem: '2rem' },
  { label: 'xxlarge', px: '40', rem: '2.5rem' },
  { label: 'xxxlarge', px: '60', rem: '3.75rem' },
]

const spacingLabels = ['Size', 'PX Value', 'Rem Value', 'Lens Reference']

export interface SpaceExample {
  label: string
  px: string
  rem: string
}

const TableLabel = (label: string, key: number) => {
  return (
    <TableHeaderCell key={key}>
      <Text size="5" weight="semiBold">
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
        <Box px="small" is="span" className="prop-code">
          <Code size="6">{label}</Code>
        </Box>
      </TableDataCell>
    </TableRow>
  )
}

export class SpacingOptionsRender extends React.Component<
  {},
  {
    lables: string[]
    spaces: SpaceExample[]
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      lables: spacingLabels,
      spaces: spacingExamples,
    }
  }

  public render() {
    return (
      <div className="spacing-table">
        <Table>
          <TableHead>
            <TableRow>
              {this.state.lables.map((label, i) => {
                return TableLabel(label, i)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.spaces.map((space, i) => {
              return SpacingRow(space.px, space.rem, i, space.label)
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}
