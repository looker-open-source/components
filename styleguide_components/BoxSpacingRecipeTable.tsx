import * as React from 'react'
import { Box } from '../src/components/Box/Box'
import { List } from '../src/components/List/List'
import { ListItem } from '../src/components/List/ListItem'
import { Code, Text } from '../src/components/Text'

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
  { value: 'xxsmall', label: '4px' },
  { value: 'xsmall', label: '8px' },
  { value: 'xsmall', label: '12px' },
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
      <Text
        size="medium"
        variant="secondary"
        textTransform="upper"
        weight="semiBold"
      >
        {text}
      </Text>
      <Box is="span" ml="xsmall">
        <Text size="xsmall" variant="subdued">
          {defaultLabel}
        </Text>
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
        <Code size="xsmall">{value}</Code>
      </Box>
      <Box ml="small" is="span">
        <Text size="small">{label}</Text>
        <Box is="span" ml="xsmall">
          <Text size="xsmall" variant="subdued">
            {defaultLabel}
          </Text>
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
