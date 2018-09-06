import * as React from 'react'
import { Box } from '../src/components/Box/Box'
import { List } from '../src/components/List/List'
import { ListItem } from '../src/components/List/ListItem'
import { Code } from '../src/components/Text/Code'
import { Span } from '../src/components/Text/Span'
import {
  Text,
  TextTransforms,
  TextVariants,
  TextWeights,
} from '../src/components/Text/Text'
import { RampSizes } from '../src/styles/ramp_sizes'

const spacingTypes = [
  { value: 'm', label: 'Margin' },
  { value: 'p', label: 'Padding' },
]

const spacingSides = [
  { value: ' ', label: 'All', defaultLabel: '(default)' },
  { value: 't', label: 'Top' },
  { value: 'r', label: 'Right' },
  { value: 'b', label: 'Bottom' },
  { value: 'l', label: 'Left' },
  { value: 'x', label: 'Left & Right' },
  { value: 'y', label: 'Top & Bottom' },
]

const spacingSizes = [
  { value: 'xsmall', label: '4px' },
  { value: 'small', label: '8px' },
  { value: 'medium', label: '16px' },
  { value: 'large', label: '20px' },
  { value: 'xlarge', label: '32px' },
  { value: 'xxlarge', label: '40px' },
  { value: 'xxxlarge', label: '60px' },
]

export interface ColumnExample {
  value: string
  label: string
  defaultLabel?: string
}

const SpaceListHeader = (text: string, defaultLabel?: string) => {
  return (
    <Box mb="medium">
      <Span
        size={RampSizes.Five}
        variant={TextVariants.Secondary}
        textTransform={TextTransforms.Upper}
        weight={TextWeights.SemiBold}
      >
        {text}
      </Span>
      <Box is="span" ml="xsmall">
        <Span size={RampSizes.Six} variant={TextVariants.Subdued}>
          {defaultLabel}
        </Span>
      </Box>
    </Box>
  )
}

const ListRender = (
  value: string,
  label: string,
  key: number,
  defaultLabel?: string
) => {
  return (
    <ListItem key={key}>
      <Box px="small" is="span" className="prop-code">
        <Code size={RampSizes.Six}>{value}</Code>
      </Box>
      <Box ml="small" is="span">
        <Span size={RampSizes.Five}>{label}</Span>
        <Box is="span" ml="xsmall">
          <Span size={RampSizes.Six} variant={TextVariants.Subdued}>
            {defaultLabel}
          </Span>
        </Box>
      </Box>
    </ListItem>
  )
}

export class BoxSpacingRecipeTableRender extends React.Component<
  {},
  {
    types: ColumnExample[]
    sides: ColumnExample[]
    sizes: ColumnExample[]
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      sides: spacingSides,
      sizes: spacingSizes,
      types: spacingTypes,
    }
  }

  public render() {
    return (
      <div className="spacing-table">
        <Box pr="xxlarge">
          {SpaceListHeader('1. Type')}
          <List>
            {this.state.types.map((col, i) => {
              return ListRender(col.value, col.label, i)
            })}
          </List>
        </Box>
        <Box px="xxlarge">
          {SpaceListHeader('2. Side', '(optional)')}
          <List>
            {this.state.sides.map((col, i) => {
              return ListRender(col.value, col.label, i, col.defaultLabel)
            })}
          </List>
        </Box>
        <Box px="xxlarge">
          {SpaceListHeader('3. Amount')}
          <List>
            {this.state.sizes.map((col, i) => {
              return ListRender(col.value, col.label, i)
            })}
          </List>
        </Box>
      </div>
    )
  }
}
